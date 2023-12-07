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
export type GiCyclingProps = typeof __propDef.props;
export type GiCyclingEvents = typeof __propDef.events;
export type GiCyclingSlots = typeof __propDef.slots;
export default class GiCycling extends SvelteComponentTyped<GiCyclingProps, GiCyclingEvents, GiCyclingSlots> {
}
export {};
