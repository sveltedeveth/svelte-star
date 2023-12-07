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
export type MdLanguageProps = typeof __propDef.props;
export type MdLanguageEvents = typeof __propDef.events;
export type MdLanguageSlots = typeof __propDef.slots;
export default class MdLanguage extends SvelteComponentTyped<MdLanguageProps, MdLanguageEvents, MdLanguageSlots> {
}
export {};
