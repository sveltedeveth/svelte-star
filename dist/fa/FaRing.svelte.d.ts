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
export type FaRingProps = typeof __propDef.props;
export type FaRingEvents = typeof __propDef.events;
export type FaRingSlots = typeof __propDef.slots;
export default class FaRing extends SvelteComponentTyped<FaRingProps, FaRingEvents, FaRingSlots> {
}
export {};
