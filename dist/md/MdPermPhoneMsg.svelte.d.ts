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
export type MdPermPhoneMsgProps = typeof __propDef.props;
export type MdPermPhoneMsgEvents = typeof __propDef.events;
export type MdPermPhoneMsgSlots = typeof __propDef.slots;
export default class MdPermPhoneMsg extends SvelteComponentTyped<MdPermPhoneMsgProps, MdPermPhoneMsgEvents, MdPermPhoneMsgSlots> {
}
export {};
