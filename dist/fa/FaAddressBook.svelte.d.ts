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
export type FaAddressBookProps = typeof __propDef.props;
export type FaAddressBookEvents = typeof __propDef.events;
export type FaAddressBookSlots = typeof __propDef.slots;
export default class FaAddressBook extends SvelteComponentTyped<FaAddressBookProps, FaAddressBookEvents, FaAddressBookSlots> {
}
export {};
