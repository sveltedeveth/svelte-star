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
export type MdPhoneForwardedProps = typeof __propDef.props;
export type MdPhoneForwardedEvents = typeof __propDef.events;
export type MdPhoneForwardedSlots = typeof __propDef.slots;
export default class MdPhoneForwarded extends SvelteComponentTyped<MdPhoneForwardedProps, MdPhoneForwardedEvents, MdPhoneForwardedSlots> {
}
export {};
