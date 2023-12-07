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
export type FaUndoProps = typeof __propDef.props;
export type FaUndoEvents = typeof __propDef.events;
export type FaUndoSlots = typeof __propDef.slots;
export default class FaUndo extends SvelteComponentTyped<FaUndoProps, FaUndoEvents, FaUndoSlots> {
}
export {};
