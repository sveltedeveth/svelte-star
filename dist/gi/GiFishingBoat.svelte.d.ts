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
export type GiFishingBoatProps = typeof __propDef.props;
export type GiFishingBoatEvents = typeof __propDef.events;
export type GiFishingBoatSlots = typeof __propDef.slots;
export default class GiFishingBoat extends SvelteComponentTyped<GiFishingBoatProps, GiFishingBoatEvents, GiFishingBoatSlots> {
}
export {};
