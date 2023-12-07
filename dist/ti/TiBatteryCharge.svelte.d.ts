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
export type TiBatteryChargeProps = typeof __propDef.props;
export type TiBatteryChargeEvents = typeof __propDef.events;
export type TiBatteryChargeSlots = typeof __propDef.slots;
export default class TiBatteryCharge extends SvelteComponentTyped<TiBatteryChargeProps, TiBatteryChargeEvents, TiBatteryChargeSlots> {
}
export {};
