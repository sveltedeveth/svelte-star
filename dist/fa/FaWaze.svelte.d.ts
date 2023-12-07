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
export type FaWazeProps = typeof __propDef.props;
export type FaWazeEvents = typeof __propDef.events;
export type FaWazeSlots = typeof __propDef.slots;
export default class FaWaze extends SvelteComponentTyped<FaWazeProps, FaWazeEvents, FaWazeSlots> {
}
export {};
