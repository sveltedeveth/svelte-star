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
export type TiContactsProps = typeof __propDef.props;
export type TiContactsEvents = typeof __propDef.events;
export type TiContactsSlots = typeof __propDef.slots;
export default class TiContacts extends SvelteComponentTyped<TiContactsProps, TiContactsEvents, TiContactsSlots> {
}
export {};
