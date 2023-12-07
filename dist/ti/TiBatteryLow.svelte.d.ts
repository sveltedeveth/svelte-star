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
export type TiBatteryLowProps = typeof __propDef.props;
export type TiBatteryLowEvents = typeof __propDef.events;
export type TiBatteryLowSlots = typeof __propDef.slots;
export default class TiBatteryLow extends SvelteComponentTyped<TiBatteryLowProps, TiBatteryLowEvents, TiBatteryLowSlots> {
}
export {};
