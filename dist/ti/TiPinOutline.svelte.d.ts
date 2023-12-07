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
export type TiPinOutlineProps = typeof __propDef.props;
export type TiPinOutlineEvents = typeof __propDef.events;
export type TiPinOutlineSlots = typeof __propDef.slots;
export default class TiPinOutline extends SvelteComponentTyped<TiPinOutlineProps, TiPinOutlineEvents, TiPinOutlineSlots> {
}
export {};
