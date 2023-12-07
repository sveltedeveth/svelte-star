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
export type GiTruckProps = typeof __propDef.props;
export type GiTruckEvents = typeof __propDef.events;
export type GiTruckSlots = typeof __propDef.slots;
export default class GiTruck extends SvelteComponentTyped<GiTruckProps, GiTruckEvents, GiTruckSlots> {
}
export {};
