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
declare module "$env/static/private" {
  export const KDE_FULL_SESSION: string;
  export const XDG_CONFIG_DIRS: string;
  export const ICEAUTHORITY: string;
  export const XDG_SESSION_TYPE: string;
  export const HISTCONTROL: string;
  export const SHELL_SESSION_ID: string;
  export const XMODIFIERS: string;
  export const HOME: string;
  export const BUN_INSTALL: string;
  export const DBUS_SESSION_BUS_ADDRESS: string;
  export const GTK_RC_FILES: string;
  export const SHELL: string;
  export const XAUTHORITY: string;
  export const GTK2_RC_FILES: string;
  export const KDEDIRS: string;
  export const LS_COLORS: string;
  export const TERM: string;
  export const XDG_CURRENT_DESKTOP: string;
  export const XDG_SEAT_PATH: string;
  export const XDG_SESSION_DESKTOP: string;
  export const GPG_TTY: string;
  export const _JAVA_AWT_WM_NONREPARENTING: string;
  export const DESKTOP_SESSION: string;
  export const SESSION_MANAGER: string;
  export const MEMORY_PRESSURE_WRITE: string;
  export const KONSOLE_DBUS_SERVICE: string;
  export const SHLVL: string;
  export const STEAM_FRAME_FORCE_CLOSE: string;
  export const XDG_SEAT: string;
  export const USER: string;
  export const GDK_CORE_DEVICE_EVENTS: string;
  export const SDL_VIDEO_MINIMIZE_ON_FOCUS_LOSS: string;
  export const LANGUAGE: string;
  export const XDG_SESSION_ID: string;
  export const XDG_RUNTIME_DIR: string;
  export const npm_config_user_agent: string;
  export const JOURNAL_STREAM: string;
  export const MAIL: string;
  export const XDG_MENU_PREFIX: string;
  export const OLDPWD: string;
  export const KONSOLE_DBUS_WINDOW: string;
  export const SSH_AUTH_SOCK: string;
  export const HISTSIZE: string;
  export const KDE_APPLICATIONS_AS_SCOPE: string;
  export const KDE_SESSION_VERSION: string;
  export const LESSOPEN: string;
  export const WAYLAND_DISPLAY: string;
  export const SSH_ASKPASS: string;
  export const WINDOWID: string;
  export const COLORFGBG: string;
  export const DEBUGINFOD_URLS: string;
  export const EDITOR: string;
  export const KDE_SESSION_UID: string;
  export const MANAGERPIDFDID: string;
  export const XDG_SESSION_PATH: string;
  export const PAM_KWALLET5_LOGIN: string;
  export const LANG: string;
  export const INIT_CWD: string;
  export const LOGNAME: string;
  export const COLORTERM: string;
  export const HOSTNAME: string;
  export const MOZ_GMP_PATH: string;
  export const PWD: string;
  export const INVOCATION_ID: string;
  export const DEBUGINFOD_IMA_CERT_PATH: string;
  export const PATH: string;
  export const MEMORY_PRESSURE_WATCH: string;
  export const XDG_DATA_DIRS: string;
  export const PROFILEHOME: string;
  export const _: string;
  export const XKB_DEFAULT_LAYOUT: string;
  export const NODE_ENV: string;
  export const IMSETTINGS_MODULE: string;
  export const DISPLAY: string;
  export const XDG_VTNR: string;
  export const KONSOLE_VERSION: string;
  export const KONSOLE_DBUS_SESSION: string;
  export const QT_WAYLAND_RECONNECT: string;
  export const XDG_SESSION_CLASS: string;
  export const IMSETTINGS_INTEGRATE_DESKTOP: string;
  export const MANAGERPID: string;
  export const XKB_DEFAULT_MODEL: string;
  export const SYSTEMD_EXEC_PID: string;
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
declare module "$env/static/public" {
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
declare module "$env/dynamic/private" {
  export const env: {
    KDE_FULL_SESSION: string;
    XDG_CONFIG_DIRS: string;
    ICEAUTHORITY: string;
    XDG_SESSION_TYPE: string;
    HISTCONTROL: string;
    SHELL_SESSION_ID: string;
    XMODIFIERS: string;
    HOME: string;
    BUN_INSTALL: string;
    DBUS_SESSION_BUS_ADDRESS: string;
    GTK_RC_FILES: string;
    SHELL: string;
    XAUTHORITY: string;
    GTK2_RC_FILES: string;
    KDEDIRS: string;
    LS_COLORS: string;
    TERM: string;
    XDG_CURRENT_DESKTOP: string;
    XDG_SEAT_PATH: string;
    XDG_SESSION_DESKTOP: string;
    GPG_TTY: string;
    _JAVA_AWT_WM_NONREPARENTING: string;
    DESKTOP_SESSION: string;
    SESSION_MANAGER: string;
    MEMORY_PRESSURE_WRITE: string;
    KONSOLE_DBUS_SERVICE: string;
    SHLVL: string;
    STEAM_FRAME_FORCE_CLOSE: string;
    XDG_SEAT: string;
    USER: string;
    GDK_CORE_DEVICE_EVENTS: string;
    SDL_VIDEO_MINIMIZE_ON_FOCUS_LOSS: string;
    LANGUAGE: string;
    XDG_SESSION_ID: string;
    XDG_RUNTIME_DIR: string;
    npm_config_user_agent: string;
    JOURNAL_STREAM: string;
    MAIL: string;
    XDG_MENU_PREFIX: string;
    OLDPWD: string;
    KONSOLE_DBUS_WINDOW: string;
    SSH_AUTH_SOCK: string;
    HISTSIZE: string;
    KDE_APPLICATIONS_AS_SCOPE: string;
    KDE_SESSION_VERSION: string;
    LESSOPEN: string;
    WAYLAND_DISPLAY: string;
    SSH_ASKPASS: string;
    WINDOWID: string;
    COLORFGBG: string;
    DEBUGINFOD_URLS: string;
    EDITOR: string;
    KDE_SESSION_UID: string;
    MANAGERPIDFDID: string;
    XDG_SESSION_PATH: string;
    PAM_KWALLET5_LOGIN: string;
    LANG: string;
    INIT_CWD: string;
    LOGNAME: string;
    COLORTERM: string;
    HOSTNAME: string;
    MOZ_GMP_PATH: string;
    PWD: string;
    INVOCATION_ID: string;
    DEBUGINFOD_IMA_CERT_PATH: string;
    PATH: string;
    MEMORY_PRESSURE_WATCH: string;
    XDG_DATA_DIRS: string;
    PROFILEHOME: string;
    _: string;
    XKB_DEFAULT_LAYOUT: string;
    NODE_ENV: string;
    IMSETTINGS_MODULE: string;
    DISPLAY: string;
    XDG_VTNR: string;
    KONSOLE_VERSION: string;
    KONSOLE_DBUS_SESSION: string;
    QT_WAYLAND_RECONNECT: string;
    XDG_SESSION_CLASS: string;
    IMSETTINGS_INTEGRATE_DESKTOP: string;
    MANAGERPID: string;
    XKB_DEFAULT_MODEL: string;
    SYSTEMD_EXEC_PID: string;
    [key: `PUBLIC_${string}`]: undefined;
    [key: `${string}`]: string | undefined;
  };
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
declare module "$env/dynamic/public" {
  export const env: {
    [key: `PUBLIC_${string}`]: string | undefined;
  };
}
