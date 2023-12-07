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
export type GiDeathNoteProps = typeof __propDef.props;
export type GiDeathNoteEvents = typeof __propDef.events;
export type GiDeathNoteSlots = typeof __propDef.slots;
export default class GiDeathNote extends SvelteComponentTyped<GiDeathNoteProps, GiDeathNoteEvents, GiDeathNoteSlots> {
}
export {};
