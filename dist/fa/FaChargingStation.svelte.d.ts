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
export type FaChargingStationProps = typeof __propDef.props;
export type FaChargingStationEvents = typeof __propDef.events;
export type FaChargingStationSlots = typeof __propDef.slots;
export default class FaChargingStation extends SvelteComponentTyped<FaChargingStationProps, FaChargingStationEvents, FaChargingStationSlots> {
}
export {};
