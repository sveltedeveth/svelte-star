import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TiSortAlphabeticallyProps = typeof __propDef.props;
export type TiSortAlphabeticallyEvents = typeof __propDef.events;
export type TiSortAlphabeticallySlots = typeof __propDef.slots;
export default class TiSortAlphabetically extends SvelteComponentTyped<TiSortAlphabeticallyProps, TiSortAlphabeticallyEvents, TiSortAlphabeticallySlots> {
}
export {};
