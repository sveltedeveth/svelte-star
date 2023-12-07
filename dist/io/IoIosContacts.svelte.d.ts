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
export type IoIosContactsProps = typeof __propDef.props;
export type IoIosContactsEvents = typeof __propDef.events;
export type IoIosContactsSlots = typeof __propDef.slots;
export default class IoIosContacts extends SvelteComponentTyped<IoIosContactsProps, IoIosContactsEvents, IoIosContactsSlots> {
}
export {};
