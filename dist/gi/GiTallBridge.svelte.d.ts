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
export type GiTallBridgeProps = typeof __propDef.props;
export type GiTallBridgeEvents = typeof __propDef.events;
export type GiTallBridgeSlots = typeof __propDef.slots;
export default class GiTallBridge extends SvelteComponentTyped<GiTallBridgeProps, GiTallBridgeEvents, GiTallBridgeSlots> {
}
export {};
