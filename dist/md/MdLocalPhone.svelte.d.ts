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
export type MdLocalPhoneProps = typeof __propDef.props;
export type MdLocalPhoneEvents = typeof __propDef.events;
export type MdLocalPhoneSlots = typeof __propDef.slots;
export default class MdLocalPhone extends SvelteComponentTyped<MdLocalPhoneProps, MdLocalPhoneEvents, MdLocalPhoneSlots> {
}
export {};
