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
export type GiMusicalNotesProps = typeof __propDef.props;
export type GiMusicalNotesEvents = typeof __propDef.events;
export type GiMusicalNotesSlots = typeof __propDef.slots;
export default class GiMusicalNotes extends SvelteComponentTyped<GiMusicalNotesProps, GiMusicalNotesEvents, GiMusicalNotesSlots> {
}
export {};
