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
export type TiNotesProps = typeof __propDef.props;
export type TiNotesEvents = typeof __propDef.events;
export type TiNotesSlots = typeof __propDef.slots;
export default class TiNotes extends SvelteComponentTyped<TiNotesProps, TiNotesEvents, TiNotesSlots> {
}
export {};
