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
export type TiWorldOutlineProps = typeof __propDef.props;
export type TiWorldOutlineEvents = typeof __propDef.events;
export type TiWorldOutlineSlots = typeof __propDef.slots;
export default class TiWorldOutline extends SvelteComponentTyped<TiWorldOutlineProps, TiWorldOutlineEvents, TiWorldOutlineSlots> {
}
export {};
