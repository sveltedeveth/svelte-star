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
export type FaIndentProps = typeof __propDef.props;
export type FaIndentEvents = typeof __propDef.events;
export type FaIndentSlots = typeof __propDef.slots;
export default class FaIndent extends SvelteComponentTyped<FaIndentProps, FaIndentEvents, FaIndentSlots> {
}
export {};
