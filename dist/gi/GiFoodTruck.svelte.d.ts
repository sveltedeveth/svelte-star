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
export type GiFoodTruckProps = typeof __propDef.props;
export type GiFoodTruckEvents = typeof __propDef.events;
export type GiFoodTruckSlots = typeof __propDef.slots;
export default class GiFoodTruck extends SvelteComponentTyped<GiFoodTruckProps, GiFoodTruckEvents, GiFoodTruckSlots> {
}
export {};
