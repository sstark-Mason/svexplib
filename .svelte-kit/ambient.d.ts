
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const GTK_RC_FILES: string;
	export const SSH_ASKPASS: string;
	export const GDK_CORE_DEVICE_EVENTS: string;
	export const SHLVL: string;
	export const KONSOLE_DBUS_SERVICE: string;
	export const COLORFGBG: string;
	export const KDEDIRS: string;
	export const KONSOLE_VERSION: string;
	export const DESKTOP_SESSION: string;
	export const PWD: string;
	export const XDG_SESSION_PATH: string;
	export const HOME: string;
	export const ICEAUTHORITY: string;
	export const INVOCATION_ID: string;
	export const SHELL_SESSION_ID: string;
	export const XKB_DEFAULT_LAYOUT: string;
	export const EDITOR: string;
	export const SESSION_MANAGER: string;
	export const KDE_FULL_SESSION: string;
	export const KONSOLE_DBUS_WINDOW: string;
	export const XAUTHORITY: string;
	export const LESSOPEN: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const XDG_DATA_DIRS: string;
	export const XDG_SEAT: string;
	export const SDL_VIDEO_MINIMIZE_ON_FOCUS_LOSS: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_SESSION_TYPE: string;
	export const LS_COLORS: string;
	export const XKB_DEFAULT_MODEL: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XDG_SEAT_PATH: string;
	export const COLORTERM: string;
	export const XDG_MENU_PREFIX: string;
	export const XDG_VTNR: string;
	export const HISTSIZE: string;
	export const _: string;
	export const NODE_ENV: string;
	export const HISTCONTROL: string;
	export const LANG: string;
	export const GTK2_RC_FILES: string;
	export const MANAGERPID: string;
	export const SHELL: string;
	export const PROFILEHOME: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const IMSETTINGS_MODULE: string;
	export const IMSETTINGS_INTEGRATE_DESKTOP: string;
	export const KDE_SESSION_VERSION: string;
	export const DEBUGINFOD_URLS: string;
	export const KDE_SESSION_UID: string;
	export const XDG_RUNTIME_DIR: string;
	export const PAM_KWALLET5_LOGIN: string;
	export const PATH: string;
	export const WAYLAND_DISPLAY: string;
	export const SSH_AUTH_SOCK: string;
	export const JOURNAL_STREAM: string;
	export const INIT_CWD: string;
	export const KONSOLE_DBUS_SESSION: string;
	export const MAIL: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const USER: string;
	export const OLDPWD: string;
	export const TERM: string;
	export const _JAVA_AWT_WM_NONREPARENTING: string;
	export const MOZ_GMP_PATH: string;
	export const BUN_INSTALL: string;
	export const MANAGERPIDFDID: string;
	export const GPG_TTY: string;
	export const LOGNAME: string;
	export const WINDOWID: string;
	export const XDG_SESSION_ID: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const STEAM_FRAME_FORCE_CLOSE: string;
	export const npm_config_user_agent: string;
	export const QT_WAYLAND_RECONNECT: string;
	export const DEBUGINFOD_IMA_CERT_PATH: string;
	export const XMODIFIERS: string;
	export const HOSTNAME: string;
	export const KDE_APPLICATIONS_AS_SCOPE: string;
	export const SYSTEMD_EXEC_PID: string;
	export const DISPLAY: string;
	export const LANGUAGE: string;
	export const XDG_SESSION_CLASS: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		GTK_RC_FILES: string;
		SSH_ASKPASS: string;
		GDK_CORE_DEVICE_EVENTS: string;
		SHLVL: string;
		KONSOLE_DBUS_SERVICE: string;
		COLORFGBG: string;
		KDEDIRS: string;
		KONSOLE_VERSION: string;
		DESKTOP_SESSION: string;
		PWD: string;
		XDG_SESSION_PATH: string;
		HOME: string;
		ICEAUTHORITY: string;
		INVOCATION_ID: string;
		SHELL_SESSION_ID: string;
		XKB_DEFAULT_LAYOUT: string;
		EDITOR: string;
		SESSION_MANAGER: string;
		KDE_FULL_SESSION: string;
		KONSOLE_DBUS_WINDOW: string;
		XAUTHORITY: string;
		LESSOPEN: string;
		MEMORY_PRESSURE_WATCH: string;
		XDG_DATA_DIRS: string;
		XDG_SEAT: string;
		SDL_VIDEO_MINIMIZE_ON_FOCUS_LOSS: string;
		XDG_CONFIG_DIRS: string;
		XDG_SESSION_TYPE: string;
		LS_COLORS: string;
		XKB_DEFAULT_MODEL: string;
		XDG_SESSION_DESKTOP: string;
		XDG_SEAT_PATH: string;
		COLORTERM: string;
		XDG_MENU_PREFIX: string;
		XDG_VTNR: string;
		HISTSIZE: string;
		_: string;
		NODE_ENV: string;
		HISTCONTROL: string;
		LANG: string;
		GTK2_RC_FILES: string;
		MANAGERPID: string;
		SHELL: string;
		PROFILEHOME: string;
		XDG_CURRENT_DESKTOP: string;
		IMSETTINGS_MODULE: string;
		IMSETTINGS_INTEGRATE_DESKTOP: string;
		KDE_SESSION_VERSION: string;
		DEBUGINFOD_URLS: string;
		KDE_SESSION_UID: string;
		XDG_RUNTIME_DIR: string;
		PAM_KWALLET5_LOGIN: string;
		PATH: string;
		WAYLAND_DISPLAY: string;
		SSH_AUTH_SOCK: string;
		JOURNAL_STREAM: string;
		INIT_CWD: string;
		KONSOLE_DBUS_SESSION: string;
		MAIL: string;
		MEMORY_PRESSURE_WRITE: string;
		USER: string;
		OLDPWD: string;
		TERM: string;
		_JAVA_AWT_WM_NONREPARENTING: string;
		MOZ_GMP_PATH: string;
		BUN_INSTALL: string;
		MANAGERPIDFDID: string;
		GPG_TTY: string;
		LOGNAME: string;
		WINDOWID: string;
		XDG_SESSION_ID: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		STEAM_FRAME_FORCE_CLOSE: string;
		npm_config_user_agent: string;
		QT_WAYLAND_RECONNECT: string;
		DEBUGINFOD_IMA_CERT_PATH: string;
		XMODIFIERS: string;
		HOSTNAME: string;
		KDE_APPLICATIONS_AS_SCOPE: string;
		SYSTEMD_EXEC_PID: string;
		DISPLAY: string;
		LANGUAGE: string;
		XDG_SESSION_CLASS: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
