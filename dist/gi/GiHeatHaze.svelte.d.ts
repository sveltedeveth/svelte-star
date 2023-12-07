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
export type GiHeatHazeProps = typeof __propDef.props;
export type GiHeatHazeEvents = typeof __propDef.events;
export type GiHeatHazeSlots = typeof __propDef.slots;
export default class GiHeatHaze extends SvelteComponentTyped<GiHeatHazeProps, GiHeatHazeEvents, GiHeatHazeSlots> {
}
export {};
