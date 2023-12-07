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
export type IoMdMusicalNoteProps = typeof __propDef.props;
export type IoMdMusicalNoteEvents = typeof __propDef.events;
export type IoMdMusicalNoteSlots = typeof __propDef.slots;
export default class IoMdMusicalNote extends SvelteComponentTyped<IoMdMusicalNoteProps, IoMdMusicalNoteEvents, IoMdMusicalNoteSlots> {
}
export {};
