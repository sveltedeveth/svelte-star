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
export type FaItunesNoteProps = typeof __propDef.props;
export type FaItunesNoteEvents = typeof __propDef.events;
export type FaItunesNoteSlots = typeof __propDef.slots;
export default class FaItunesNote extends SvelteComponentTyped<FaItunesNoteProps, FaItunesNoteEvents, FaItunesNoteSlots> {
}
export {};
