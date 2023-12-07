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
export type GiStoneBridgeProps = typeof __propDef.props;
export type GiStoneBridgeEvents = typeof __propDef.events;
export type GiStoneBridgeSlots = typeof __propDef.slots;
export default class GiStoneBridge extends SvelteComponentTyped<GiStoneBridgeProps, GiStoneBridgeEvents, GiStoneBridgeSlots> {
}
export {};
