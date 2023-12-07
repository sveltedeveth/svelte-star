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
export type MdInsertInvitationProps = typeof __propDef.props;
export type MdInsertInvitationEvents = typeof __propDef.events;
export type MdInsertInvitationSlots = typeof __propDef.slots;
export default class MdInsertInvitation extends SvelteComponentTyped<MdInsertInvitationProps, MdInsertInvitationEvents, MdInsertInvitationSlots> {
}
export {};
