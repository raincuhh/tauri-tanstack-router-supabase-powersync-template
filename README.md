# Tauri Powersync Supabase Tanstack Router Template

This repository is a template for building **desktop** and **mobile** applications using **Tauri**, **Powersync**, **Supabase**, **Tanstack Router**, **React**, **Vite**, and **Tailwind CSS**.

This template includes all the necessary setup for a modern full-stack application, with **Tauri** for desktop apps, **Powersync** for real-time syncing, **Supabase** for backend services, and **Tanstack Router** for routing. It also includes **Tailwind CSS** for utility-first styling.

## Features:

-  **Tauri** for building native desktop applications.
-  **Powersync** for real-time data syncing between devices.
-  **Supabase** for your backend needs (auth, database, storage).
-  **Tanstack Router** for declarative routing in React.
-  **Vite** for fast and efficient build tooling.
-  **Tailwind CSS** for modern, utility-first styling.
-  **React** for building the UI components.
-  **TypeScript** for type safety.

## Prerequisites

To configure **Supabase** and **Powersync** in your project, youll need to setup a supabase database, and a powersync instance, and also add the following environment variables to your `.env` file.

-  `VITE_SUPABASE_ANON_KEY`: The anonymous key for your Supabase project.
-  `VITE_SUPABASE_URL`: The URL for your Supabase instance.
-  `VITE_POWERSYNC_URL`: The URL of your Powersync server.
-  `VITE_POWERSYNC_TOKEN`: The authentication token for Powersync.

For detailed instructions, visit the [Powersync + Supabase Integrations guide](https://docs.powersync.com/integration-guides/supabase-+-powersync) to learn how to set up and configure your Powersync instance and supabase database.

### Example `.env` file:

```env
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_SUPABASE_URL=https://your-supabase-url.supabase.co
VITE_POWERSYNC_URL=https://your-powersync-url.com
VITE_POWERSYNC_TOKEN=your_powersync_token
```

Ensure you replace the placeholders (`your_supabase_anon_key`, `your-supabase-url`, `your-powersync-url`, `your_powersync_token`) with your actual values from the Supabase and Powersync setups.

## Development

### Installing dependencies:

To get started, install the dependencies by running:

```bash
pnpm install
```

### For Desktop development:

To start the Tauri development environment for desktop:

```bash
pnpm tauri dev
```

### For Android development:

To start the Android development environment for Tauri:

```bash
pnpm tauri android dev
```

### For Preview:

To preview the app after building:

```bash
pnpm preview
```

## Configuration

This template comes pre-configured with:

-  [**Vite**](https://github.com/vitejs/vite)
-  [**Tailwind CSS**](https://github.com/tailwindlabs/tailwindcss)
-  [**React**](https://github.com/facebook/react)
-  [**Tanstack Router**](https://github.com/TanStack/router)
-  [**Supabase**](https://github.com/supabase/supabase)
-  [**Powersync**](https://github.com/PowerSync/web)

## Customization

Feel free to customize this template to suit your needs. You can modify routes, API integrations, or add new features as required.

Feel free to open issues or submit pull requests if you'd like to contribute to this template!
