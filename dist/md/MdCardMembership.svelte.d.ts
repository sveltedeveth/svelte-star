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
export type MdCardMembershipProps = typeof __propDef.props;
export type MdCardMembershipEvents = typeof __propDef.events;
export type MdCardMembershipSlots = typeof __propDef.slots;
export default class MdCardMembership extends SvelteComponentTyped<MdCardMembershipProps, MdCardMembershipEvents, MdCardMembershipSlots> {
}
export {};
