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
export type MdNoEncryptionProps = typeof __propDef.props;
export type MdNoEncryptionEvents = typeof __propDef.events;
export type MdNoEncryptionSlots = typeof __propDef.slots;
export default class MdNoEncryption extends SvelteComponentTyped<MdNoEncryptionProps, MdNoEncryptionEvents, MdNoEncryptionSlots> {
}
export {};
