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
export type TiNotesOutlineProps = typeof __propDef.props;
export type TiNotesOutlineEvents = typeof __propDef.events;
export type TiNotesOutlineSlots = typeof __propDef.slots;
export default class TiNotesOutline extends SvelteComponentTyped<TiNotesOutlineProps, TiNotesOutlineEvents, TiNotesOutlineSlots> {
}
export {};
