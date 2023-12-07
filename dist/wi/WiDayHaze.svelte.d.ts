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
export type WiDayHazeProps = typeof __propDef.props;
export type WiDayHazeEvents = typeof __propDef.events;
export type WiDayHazeSlots = typeof __propDef.slots;
export default class WiDayHaze extends SvelteComponentTyped<WiDayHazeProps, WiDayHazeEvents, WiDayHazeSlots> {
}
export {};
