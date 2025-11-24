// Exporting for Deno
export { default as debugLib } from "debug"; // Works in Deno. I ran `deno install npm:debug` and `deno add npm:debug`, so I'm not sure which is required.
export { PersistedState } from "runed";
export { asDroppable, asDropZone } from "svelte-drag-and-drop-actions";
// export { Prism as PrismLib } from "prismjs";