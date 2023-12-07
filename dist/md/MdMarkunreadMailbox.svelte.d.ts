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
export type MdMarkunreadMailboxProps = typeof __propDef.props;
export type MdMarkunreadMailboxEvents = typeof __propDef.events;
export type MdMarkunreadMailboxSlots = typeof __propDef.slots;
export default class MdMarkunreadMailbox extends SvelteComponentTyped<MdMarkunreadMailboxProps, MdMarkunreadMailboxEvents, MdMarkunreadMailboxSlots> {
}
export {};
