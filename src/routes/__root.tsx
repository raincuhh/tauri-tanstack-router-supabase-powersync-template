import { PropsWithChildren } from "react";
import { Outlet, createRootRoute, Scripts } from "@tanstack/react-router";
import AppProvider from "@/shared/providers/appProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "../../src/global.css";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	);
}

type RootDocumentProps = PropsWithChildren;

function RootDocument({ children }: RootDocumentProps) {
	return (
		<AppProvider>
			<RootLayout>{children}</RootLayout>
			<div className="absolute">
				<ReactQueryDevtools buttonPosition="bottom-left" />
				<TanStackRouterDevtools position="bottom-right" />
			</div>
			<Scripts />
		</AppProvider>
	);
}

type RootLayoutProps = PropsWithChildren;

function RootLayout({ children }: RootLayoutProps) {
	return (
		<div className="flex flex-col bg-primary h-screen">
			<main className="flex w-full h-full justify-center items-center">{children}</main>
		</div>
	);
}
