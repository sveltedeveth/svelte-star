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
export type MdContactsProps = typeof __propDef.props;
export type MdContactsEvents = typeof __propDef.events;
export type MdContactsSlots = typeof __propDef.slots;
export default class MdContacts extends SvelteComponentTyped<MdContactsProps, MdContactsEvents, MdContactsSlots> {
}
export {};
