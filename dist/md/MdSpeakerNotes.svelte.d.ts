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
export type MdSpeakerNotesProps = typeof __propDef.props;
export type MdSpeakerNotesEvents = typeof __propDef.events;
export type MdSpeakerNotesSlots = typeof __propDef.slots;
export default class MdSpeakerNotes extends SvelteComponentTyped<MdSpeakerNotesProps, MdSpeakerNotesEvents, MdSpeakerNotesSlots> {
}
export {};
