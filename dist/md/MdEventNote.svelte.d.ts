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
export type MdEventNoteProps = typeof __propDef.props;
export type MdEventNoteEvents = typeof __propDef.events;
export type MdEventNoteSlots = typeof __propDef.slots;
export default class MdEventNote extends SvelteComponentTyped<MdEventNoteProps, MdEventNoteEvents, MdEventNoteSlots> {
}
export {};
