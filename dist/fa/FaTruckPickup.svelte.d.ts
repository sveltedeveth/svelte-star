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
export type FaTruckPickupProps = typeof __propDef.props;
export type FaTruckPickupEvents = typeof __propDef.events;
export type FaTruckPickupSlots = typeof __propDef.slots;
export default class FaTruckPickup extends SvelteComponentTyped<FaTruckPickupProps, FaTruckPickupEvents, FaTruckPickupSlots> {
}
export {};
