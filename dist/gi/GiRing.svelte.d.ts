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
export type GiRingProps = typeof __propDef.props;
export type GiRingEvents = typeof __propDef.events;
export type GiRingSlots = typeof __propDef.slots;
export default class GiRing extends SvelteComponentTyped<GiRingProps, GiRingEvents, GiRingSlots> {
}
export {};
