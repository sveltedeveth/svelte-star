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
export type GiTowerBridgeProps = typeof __propDef.props;
export type GiTowerBridgeEvents = typeof __propDef.events;
export type GiTowerBridgeSlots = typeof __propDef.slots;
export default class GiTowerBridge extends SvelteComponentTyped<GiTowerBridgeProps, GiTowerBridgeEvents, GiTowerBridgeSlots> {
}
export {};
