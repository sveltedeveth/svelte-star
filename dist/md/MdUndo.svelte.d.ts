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
export type MdUndoProps = typeof __propDef.props;
export type MdUndoEvents = typeof __propDef.events;
export type MdUndoSlots = typeof __propDef.slots;
export default class MdUndo extends SvelteComponentTyped<MdUndoProps, MdUndoEvents, MdUndoSlots> {
}
export {};
