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
export type MdEnhancedEncryptionProps = typeof __propDef.props;
export type MdEnhancedEncryptionEvents = typeof __propDef.events;
export type MdEnhancedEncryptionSlots = typeof __propDef.slots;
export default class MdEnhancedEncryption extends SvelteComponentTyped<MdEnhancedEncryptionProps, MdEnhancedEncryptionEvents, MdEnhancedEncryptionSlots> {
}
export {};
