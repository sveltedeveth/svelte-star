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
export type GiSpeedBoatProps = typeof __propDef.props;
export type GiSpeedBoatEvents = typeof __propDef.events;
export type GiSpeedBoatSlots = typeof __propDef.slots;
export default class GiSpeedBoat extends SvelteComponentTyped<GiSpeedBoatProps, GiSpeedBoatEvents, GiSpeedBoatSlots> {
}
export {};
