import { PowerSyncContext } from "@powersync/react";
import { PowerSyncDatabase } from "@powersync/web";
import { SupabaseConnector } from "../lib/supabaseConnector";
import { createContext, ReactNode, Suspense, useContext, useEffect, useState } from "react";
import BackendConnector from "../lib/backendConnector";
import { AppSchema } from "../lib/appSchema";

const SupabaseContext = createContext<SupabaseConnector | null>(null);
export const useSupabase = () => useContext(SupabaseContext);
const supabase = new SupabaseConnector();

// backendconnector example.
const backend = new BackendConnector();

const db = new PowerSyncDatabase({
	database: { dbFilename: "local.db" },
	schema: AppSchema,
	flags: {
		useWebWorker: false,
	},
});

const SystemProvider = ({ children }: { children: ReactNode }) => {
	const [connector] = useState<SupabaseConnector>(supabase);
	const [powerSync] = useState<PowerSyncDatabase>(db);

	useEffect(() => {
		// powerSync.connect(connector);

		(window as any)._powersync = powerSync;

		powerSync.init();

		const l = connector.registerListener({
			initialized: () => {},
			sessionStarted: () => {
				powerSync.connect(connector, { connectionMethod: SyncStreamConnectionMethod.WEB_SOCKET });
			},
		});

		connector.init();

		return () => l?.();
	}, [powerSync, connector]);

	return (
		<Suspense fallback={<>Loading...</>}>
			<PowerSyncContext.Provider value={powerSync}>
				<SupabaseContext.Provider value={connector}>{children}</SupabaseContext.Provider>
			</PowerSyncContext.Provider>
		</Suspense>
	);
};

export { SystemProvider };
