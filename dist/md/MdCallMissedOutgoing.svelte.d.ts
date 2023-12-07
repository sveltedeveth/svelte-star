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
export type MdCallMissedOutgoingProps = typeof __propDef.props;
export type MdCallMissedOutgoingEvents = typeof __propDef.events;
export type MdCallMissedOutgoingSlots = typeof __propDef.slots;
export default class MdCallMissedOutgoing extends SvelteComponentTyped<MdCallMissedOutgoingProps, MdCallMissedOutgoingEvents, MdCallMissedOutgoingSlots> {
}
export {};
