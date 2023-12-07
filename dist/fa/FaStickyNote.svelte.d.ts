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
export type FaStickyNoteProps = typeof __propDef.props;
export type FaStickyNoteEvents = typeof __propDef.events;
export type FaStickyNoteSlots = typeof __propDef.slots;
export default class FaStickyNote extends SvelteComponentTyped<FaStickyNoteProps, FaStickyNoteEvents, FaStickyNoteSlots> {
}
export {};
