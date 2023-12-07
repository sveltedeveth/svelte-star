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
export type MdMoveToInboxProps = typeof __propDef.props;
export type MdMoveToInboxEvents = typeof __propDef.events;
export type MdMoveToInboxSlots = typeof __propDef.slots;
export default class MdMoveToInbox extends SvelteComponentTyped<MdMoveToInboxProps, MdMoveToInboxEvents, MdMoveToInboxSlots> {
}
export {};
