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
export type GiQuillInkProps = typeof __propDef.props;
export type GiQuillInkEvents = typeof __propDef.events;
export type GiQuillInkSlots = typeof __propDef.slots;
export default class GiQuillInk extends SvelteComponentTyped<GiQuillInkProps, GiQuillInkEvents, GiQuillInkSlots> {
}
export {};
