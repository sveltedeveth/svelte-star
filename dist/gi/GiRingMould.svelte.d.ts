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
export type GiRingMouldProps = typeof __propDef.props;
export type GiRingMouldEvents = typeof __propDef.events;
export type GiRingMouldSlots = typeof __propDef.slots;
export default class GiRingMould extends SvelteComponentTyped<GiRingMouldProps, GiRingMouldEvents, GiRingMouldSlots> {
}
export {};
