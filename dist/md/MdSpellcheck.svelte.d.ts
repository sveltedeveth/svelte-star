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
export type MdSpellcheckProps = typeof __propDef.props;
export type MdSpellcheckEvents = typeof __propDef.events;
export type MdSpellcheckSlots = typeof __propDef.slots;
export default class MdSpellcheck extends SvelteComponentTyped<MdSpellcheckProps, MdSpellcheckEvents, MdSpellcheckSlots> {
}
export {};
