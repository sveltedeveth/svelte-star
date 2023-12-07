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
export type IoMdContactsProps = typeof __propDef.props;
export type IoMdContactsEvents = typeof __propDef.events;
export type IoMdContactsSlots = typeof __propDef.slots;
export default class IoMdContacts extends SvelteComponentTyped<IoMdContactsProps, IoMdContactsEvents, IoMdContactsSlots> {
}
export {};
