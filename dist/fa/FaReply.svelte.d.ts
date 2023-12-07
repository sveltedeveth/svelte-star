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
export type FaReplyProps = typeof __propDef.props;
export type FaReplyEvents = typeof __propDef.events;
export type FaReplySlots = typeof __propDef.slots;
export default class FaReply extends SvelteComponentTyped<FaReplyProps, FaReplyEvents, FaReplySlots> {
}
export {};
