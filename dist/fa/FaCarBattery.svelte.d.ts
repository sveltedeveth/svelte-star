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
export type FaCarBatteryProps = typeof __propDef.props;
export type FaCarBatteryEvents = typeof __propDef.events;
export type FaCarBatterySlots = typeof __propDef.slots;
export default class FaCarBattery extends SvelteComponentTyped<FaCarBatteryProps, FaCarBatteryEvents, FaCarBatterySlots> {
}
export {};
