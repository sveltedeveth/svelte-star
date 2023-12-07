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
export type GiCarBatteryProps = typeof __propDef.props;
export type GiCarBatteryEvents = typeof __propDef.events;
export type GiCarBatterySlots = typeof __propDef.slots;
export default class GiCarBattery extends SvelteComponentTyped<GiCarBatteryProps, GiCarBatteryEvents, GiCarBatterySlots> {
}
export {};
