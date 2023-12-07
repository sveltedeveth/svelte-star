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
export type GiStabbedNoteProps = typeof __propDef.props;
export type GiStabbedNoteEvents = typeof __propDef.events;
export type GiStabbedNoteSlots = typeof __propDef.slots;
export default class GiStabbedNote extends SvelteComponentTyped<GiStabbedNoteProps, GiStabbedNoteEvents, GiStabbedNoteSlots> {
}
export {};
