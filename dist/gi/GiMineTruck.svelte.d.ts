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
export type GiMineTruckProps = typeof __propDef.props;
export type GiMineTruckEvents = typeof __propDef.events;
export type GiMineTruckSlots = typeof __propDef.slots;
export default class GiMineTruck extends SvelteComponentTyped<GiMineTruckProps, GiMineTruckEvents, GiMineTruckSlots> {
}
export {};
