
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/ccgGameRound" | "/comprehensionQuestions" | "/exp" | "/exp/ccg" | "/exp/ccg/comprehension" | "/exp/ccg/instructions" | "/exp/ccg/overview" | "/towerofHanoi";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/ccgGameRound": Record<string, never>;
			"/comprehensionQuestions": Record<string, never>;
			"/exp": Record<string, never>;
			"/exp/ccg": Record<string, never>;
			"/exp/ccg/comprehension": Record<string, never>;
			"/exp/ccg/instructions": Record<string, never>;
			"/exp/ccg/overview": Record<string, never>;
			"/towerofHanoi": Record<string, never>
		};
		Pathname(): "/" | "/ccgGameRound" | "/ccgGameRound/" | "/comprehensionQuestions" | "/comprehensionQuestions/" | "/exp" | "/exp/" | "/exp/ccg" | "/exp/ccg/" | "/exp/ccg/comprehension" | "/exp/ccg/comprehension/" | "/exp/ccg/instructions" | "/exp/ccg/instructions/" | "/exp/ccg/overview" | "/exp/ccg/overview/" | "/towerofHanoi" | "/towerofHanoi/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/robots.txt" | string & {};
	}
}