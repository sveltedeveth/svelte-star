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
export type TiPlusOutlineProps = typeof __propDef.props;
export type TiPlusOutlineEvents = typeof __propDef.events;
export type TiPlusOutlineSlots = typeof __propDef.slots;
export default class TiPlusOutline extends SvelteComponentTyped<TiPlusOutlineProps, TiPlusOutlineEvents, TiPlusOutlineSlots> {
}
export {};
