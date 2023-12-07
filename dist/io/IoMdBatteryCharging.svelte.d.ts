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
export type IoMdBatteryChargingProps = typeof __propDef.props;
export type IoMdBatteryChargingEvents = typeof __propDef.events;
export type IoMdBatteryChargingSlots = typeof __propDef.slots;
export default class IoMdBatteryCharging extends SvelteComponentTyped<IoMdBatteryChargingProps, IoMdBatteryChargingEvents, IoMdBatteryChargingSlots> {
}
export {};
