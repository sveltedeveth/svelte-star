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
export type TiGlobeOutlineProps = typeof __propDef.props;
export type TiGlobeOutlineEvents = typeof __propDef.events;
export type TiGlobeOutlineSlots = typeof __propDef.slots;
export default class TiGlobeOutline extends SvelteComponentTyped<TiGlobeOutlineProps, TiGlobeOutlineEvents, TiGlobeOutlineSlots> {
}
export {};
