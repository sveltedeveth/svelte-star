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
export type MdReplyProps = typeof __propDef.props;
export type MdReplyEvents = typeof __propDef.events;
export type MdReplySlots = typeof __propDef.slots;
export default class MdReply extends SvelteComponentTyped<MdReplyProps, MdReplyEvents, MdReplySlots> {
}
export {};
