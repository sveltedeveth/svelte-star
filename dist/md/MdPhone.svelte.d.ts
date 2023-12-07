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
export type MdPhoneProps = typeof __propDef.props;
export type MdPhoneEvents = typeof __propDef.events;
export type MdPhoneSlots = typeof __propDef.slots;
export default class MdPhone extends SvelteComponentTyped<MdPhoneProps, MdPhoneEvents, MdPhoneSlots> {
}
export {};
