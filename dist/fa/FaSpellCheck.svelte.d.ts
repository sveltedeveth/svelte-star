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
export type FaSpellCheckProps = typeof __propDef.props;
export type FaSpellCheckEvents = typeof __propDef.events;
export type FaSpellCheckSlots = typeof __propDef.slots;
export default class FaSpellCheck extends SvelteComponentTyped<FaSpellCheckProps, FaSpellCheckEvents, FaSpellCheckSlots> {
}
export {};
