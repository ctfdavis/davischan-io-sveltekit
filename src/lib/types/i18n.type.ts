import type {Writable} from "svelte/store";

export type T =  Writable<string> & {get: () => string} & {forceSet: any};
