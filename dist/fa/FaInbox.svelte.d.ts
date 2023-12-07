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
export type FaInboxProps = typeof __propDef.props;
export type FaInboxEvents = typeof __propDef.events;
export type FaInboxSlots = typeof __propDef.slots;
export default class FaInbox extends SvelteComponentTyped<FaInboxProps, FaInboxEvents, FaInboxSlots> {
}
export {};
