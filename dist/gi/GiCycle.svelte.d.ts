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
export type GiCycleProps = typeof __propDef.props;
export type GiCycleEvents = typeof __propDef.events;
export type GiCycleSlots = typeof __propDef.slots;
export default class GiCycle extends SvelteComponentTyped<GiCycleProps, GiCycleEvents, GiCycleSlots> {
}
export {};
