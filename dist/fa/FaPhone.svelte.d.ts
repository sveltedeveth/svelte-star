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
export type FaPhoneProps = typeof __propDef.props;
export type FaPhoneEvents = typeof __propDef.events;
export type FaPhoneSlots = typeof __propDef.slots;
export default class FaPhone extends SvelteComponentTyped<FaPhoneProps, FaPhoneEvents, FaPhoneSlots> {
}
export {};
