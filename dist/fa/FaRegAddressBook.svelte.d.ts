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
export type FaRegAddressBookProps = typeof __propDef.props;
export type FaRegAddressBookEvents = typeof __propDef.events;
export type FaRegAddressBookSlots = typeof __propDef.slots;
export default class FaRegAddressBook extends SvelteComponentTyped<FaRegAddressBookProps, FaRegAddressBookEvents, FaRegAddressBookSlots> {
}
export {};
