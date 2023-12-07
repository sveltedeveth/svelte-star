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
export type MdInboxProps = typeof __propDef.props;
export type MdInboxEvents = typeof __propDef.events;
export type MdInboxSlots = typeof __propDef.slots;
export default class MdInbox extends SvelteComponentTyped<MdInboxProps, MdInboxEvents, MdInboxSlots> {
}
export {};
