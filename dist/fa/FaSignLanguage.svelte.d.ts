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
export type FaSignLanguageProps = typeof __propDef.props;
export type FaSignLanguageEvents = typeof __propDef.events;
export type FaSignLanguageSlots = typeof __propDef.slots;
export default class FaSignLanguage extends SvelteComponentTyped<FaSignLanguageProps, FaSignLanguageEvents, FaSignLanguageSlots> {
}
export {};
