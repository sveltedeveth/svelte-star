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
export type MdPhoneLockedProps = typeof __propDef.props;
export type MdPhoneLockedEvents = typeof __propDef.events;
export type MdPhoneLockedSlots = typeof __propDef.slots;
export default class MdPhoneLocked extends SvelteComponentTyped<MdPhoneLockedProps, MdPhoneLockedEvents, MdPhoneLockedSlots> {
}
export {};
