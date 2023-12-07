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
export type GiStarCycleProps = typeof __propDef.props;
export type GiStarCycleEvents = typeof __propDef.events;
export type GiStarCycleSlots = typeof __propDef.slots;
export default class GiStarCycle extends SvelteComponentTyped<GiStarCycleProps, GiStarCycleEvents, GiStarCycleSlots> {
}
export {};
