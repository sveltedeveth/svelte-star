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
export type TiTickOutlineProps = typeof __propDef.props;
export type TiTickOutlineEvents = typeof __propDef.events;
export type TiTickOutlineSlots = typeof __propDef.slots;
export default class TiTickOutline extends SvelteComponentTyped<TiTickOutlineProps, TiTickOutlineEvents, TiTickOutlineSlots> {
}
export {};
