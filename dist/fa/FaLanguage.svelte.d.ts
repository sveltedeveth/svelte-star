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
export type FaLanguageProps = typeof __propDef.props;
export type FaLanguageEvents = typeof __propDef.events;
export type FaLanguageSlots = typeof __propDef.slots;
export default class FaLanguage extends SvelteComponentTyped<FaLanguageProps, FaLanguageEvents, FaLanguageSlots> {
}
export {};
