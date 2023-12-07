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
export type TiBatteryMidProps = typeof __propDef.props;
export type TiBatteryMidEvents = typeof __propDef.events;
export type TiBatteryMidSlots = typeof __propDef.slots;
export default class TiBatteryMid extends SvelteComponentTyped<TiBatteryMidProps, TiBatteryMidEvents, TiBatteryMidSlots> {
}
export {};
