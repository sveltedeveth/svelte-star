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
export type GiGazeProps = typeof __propDef.props;
export type GiGazeEvents = typeof __propDef.events;
export type GiGazeSlots = typeof __propDef.slots;
export default class GiGaze extends SvelteComponentTyped<GiGazeProps, GiGazeEvents, GiGazeSlots> {
}
export {};
