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
export type MdNoteProps = typeof __propDef.props;
export type MdNoteEvents = typeof __propDef.events;
export type MdNoteSlots = typeof __propDef.slots;
export default class MdNote extends SvelteComponentTyped<MdNoteProps, MdNoteEvents, MdNoteSlots> {
}
export {};
