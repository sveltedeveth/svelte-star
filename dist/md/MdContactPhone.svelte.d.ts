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
export type MdContactPhoneProps = typeof __propDef.props;
export type MdContactPhoneEvents = typeof __propDef.events;
export type MdContactPhoneSlots = typeof __propDef.slots;
export default class MdContactPhone extends SvelteComponentTyped<MdContactPhoneProps, MdContactPhoneEvents, MdContactPhoneSlots> {
}
export {};
