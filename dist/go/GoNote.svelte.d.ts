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
export type GoNoteProps = typeof __propDef.props;
export type GoNoteEvents = typeof __propDef.events;
export type GoNoteSlots = typeof __propDef.slots;
export default class GoNote extends SvelteComponentTyped<GoNoteProps, GoNoteEvents, GoNoteSlots> {
}
export {};
