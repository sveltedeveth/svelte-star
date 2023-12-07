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
export type MdNoteAddProps = typeof __propDef.props;
export type MdNoteAddEvents = typeof __propDef.events;
export type MdNoteAddSlots = typeof __propDef.slots;
export default class MdNoteAdd extends SvelteComponentTyped<MdNoteAddProps, MdNoteAddEvents, MdNoteAddSlots> {
}
export {};
