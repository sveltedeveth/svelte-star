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
export type MdDirectionsBoatProps = typeof __propDef.props;
export type MdDirectionsBoatEvents = typeof __propDef.events;
export type MdDirectionsBoatSlots = typeof __propDef.slots;
export default class MdDirectionsBoat extends SvelteComponentTyped<MdDirectionsBoatProps, MdDirectionsBoatEvents, MdDirectionsBoatSlots> {
}
export {};
