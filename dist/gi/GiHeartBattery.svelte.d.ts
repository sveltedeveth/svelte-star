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
export type GiHeartBatteryProps = typeof __propDef.props;
export type GiHeartBatteryEvents = typeof __propDef.events;
export type GiHeartBatterySlots = typeof __propDef.slots;
export default class GiHeartBattery extends SvelteComponentTyped<GiHeartBatteryProps, GiHeartBatteryEvents, GiHeartBatterySlots> {
}
export {};
