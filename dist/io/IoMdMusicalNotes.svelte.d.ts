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
export type IoMdMusicalNotesProps = typeof __propDef.props;
export type IoMdMusicalNotesEvents = typeof __propDef.events;
export type IoMdMusicalNotesSlots = typeof __propDef.slots;
export default class IoMdMusicalNotes extends SvelteComponentTyped<IoMdMusicalNotesProps, IoMdMusicalNotesEvents, IoMdMusicalNotesSlots> {
}
export {};
