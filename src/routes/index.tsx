import { createFileRoute, Link } from "@tanstack/react-router";
import { useStatus } from "@powersync/react";
import { cn } from "@/shared/lib/globalUtils";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	const status = useStatus();

	return (
		<div className="flex flex-col bg-primary h-screen justify-center items-center gap-4">
			<header className="mb-8 text-center text-2xl font-bold">
				<h1>Tauri + Tanstack Router + Supabase + powersync</h1>
			</header>
			<div className="flex gap-4">
				<div
					className={cn(
						"px-2 py-1 rounded-full text-white",
						status.connected ? "bg-green-500" : "bg-yellow-500"
					)}
				>
					{status.connected ? "connected" : "disconnected"}
				</div>
				<div
					className={cn(
						"px-2 py-1 rounded-full text-white",
						status.hasSynced ? "bg-green-500" : "bg-yellow-500"
					)}
				>
					{status.hasSynced ? "synced" : "syncing..."}
				</div>
			</div>
			<div>
				<Link to="/test">Go to test</Link>
			</div>
		</div>
	);
}
