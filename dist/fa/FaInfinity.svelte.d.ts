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
export type FaInfinityProps = typeof __propDef.props;
export type FaInfinityEvents = typeof __propDef.events;
export type FaInfinitySlots = typeof __propDef.slots;
export default class FaInfinity extends SvelteComponentTyped<FaInfinityProps, FaInfinityEvents, FaInfinitySlots> {
}
export {};
