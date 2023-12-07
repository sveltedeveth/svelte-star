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
export type TiPlaneOutlineProps = typeof __propDef.props;
export type TiPlaneOutlineEvents = typeof __propDef.events;
export type TiPlaneOutlineSlots = typeof __propDef.slots;
export default class TiPlaneOutline extends SvelteComponentTyped<TiPlaneOutlineProps, TiPlaneOutlineEvents, TiPlaneOutlineSlots> {
}
export {};
