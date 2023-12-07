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
export type GiBatteryPackProps = typeof __propDef.props;
export type GiBatteryPackEvents = typeof __propDef.events;
export type GiBatteryPackSlots = typeof __propDef.slots;
export default class GiBatteryPack extends SvelteComponentTyped<GiBatteryPackProps, GiBatteryPackEvents, GiBatteryPackSlots> {
}
export {};
