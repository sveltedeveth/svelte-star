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
export type TiTabsOutlineProps = typeof __propDef.props;
export type TiTabsOutlineEvents = typeof __propDef.events;
export type TiTabsOutlineSlots = typeof __propDef.slots;
export default class TiTabsOutline extends SvelteComponentTyped<TiTabsOutlineProps, TiTabsOutlineEvents, TiTabsOutlineSlots> {
}
export {};
