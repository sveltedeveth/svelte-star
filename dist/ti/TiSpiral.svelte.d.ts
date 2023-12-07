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
export type TiSpiralProps = typeof __propDef.props;
export type TiSpiralEvents = typeof __propDef.events;
export type TiSpiralSlots = typeof __propDef.slots;
export default class TiSpiral extends SvelteComponentTyped<TiSpiralProps, TiSpiralEvents, TiSpiralSlots> {
}
export {};
