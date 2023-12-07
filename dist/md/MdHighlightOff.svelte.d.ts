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
export type MdHighlightOffProps = typeof __propDef.props;
export type MdHighlightOffEvents = typeof __propDef.events;
export type MdHighlightOffSlots = typeof __propDef.slots;
export default class MdHighlightOff extends SvelteComponentTyped<MdHighlightOffProps, MdHighlightOffEvents, MdHighlightOffSlots> {
}
export {};
