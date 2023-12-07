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
export type IoMdUndoProps = typeof __propDef.props;
export type IoMdUndoEvents = typeof __propDef.events;
export type IoMdUndoSlots = typeof __propDef.slots;
export default class IoMdUndo extends SvelteComponentTyped<IoMdUndoProps, IoMdUndoEvents, IoMdUndoSlots> {
}
export {};
