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
export type GiRefineryProps = typeof __propDef.props;
export type GiRefineryEvents = typeof __propDef.events;
export type GiRefinerySlots = typeof __propDef.slots;
export default class GiRefinery extends SvelteComponentTyped<GiRefineryProps, GiRefineryEvents, GiRefinerySlots> {
}
export {};
