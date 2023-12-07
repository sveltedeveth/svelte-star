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
export type MdImportContactsProps = typeof __propDef.props;
export type MdImportContactsEvents = typeof __propDef.events;
export type MdImportContactsSlots = typeof __propDef.slots;
export default class MdImportContacts extends SvelteComponentTyped<MdImportContactsProps, MdImportContactsEvents, MdImportContactsSlots> {
}
export {};
