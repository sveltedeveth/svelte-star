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
export type GiBatteryPlusProps = typeof __propDef.props;
export type GiBatteryPlusEvents = typeof __propDef.events;
export type GiBatteryPlusSlots = typeof __propDef.slots;
export default class GiBatteryPlus extends SvelteComponentTyped<GiBatteryPlusProps, GiBatteryPlusEvents, GiBatteryPlusSlots> {
}
export {};
