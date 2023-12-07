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
export type FaReplyAllProps = typeof __propDef.props;
export type FaReplyAllEvents = typeof __propDef.events;
export type FaReplyAllSlots = typeof __propDef.slots;
export default class FaReplyAll extends SvelteComponentTyped<FaReplyAllProps, FaReplyAllEvents, FaReplyAllSlots> {
}
export {};
