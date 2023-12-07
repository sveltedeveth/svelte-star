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
export type TiBatteryHighProps = typeof __propDef.props;
export type TiBatteryHighEvents = typeof __propDef.events;
export type TiBatteryHighSlots = typeof __propDef.slots;
export default class TiBatteryHigh extends SvelteComponentTyped<TiBatteryHighProps, TiBatteryHighEvents, TiBatteryHighSlots> {
}
export {};
