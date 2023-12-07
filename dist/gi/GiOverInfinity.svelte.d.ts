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
export type GiOverInfinityProps = typeof __propDef.props;
export type GiOverInfinityEvents = typeof __propDef.events;
export type GiOverInfinitySlots = typeof __propDef.slots;
export default class GiOverInfinity extends SvelteComponentTyped<GiOverInfinityProps, GiOverInfinityEvents, GiOverInfinitySlots> {
}
export {};
