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
export type FaLifeRingProps = typeof __propDef.props;
export type FaLifeRingEvents = typeof __propDef.events;
export type FaLifeRingSlots = typeof __propDef.slots;
export default class FaLifeRing extends SvelteComponentTyped<FaLifeRingProps, FaLifeRingEvents, FaLifeRingSlots> {
}
export {};
