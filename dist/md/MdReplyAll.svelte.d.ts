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
export type MdReplyAllProps = typeof __propDef.props;
export type MdReplyAllEvents = typeof __propDef.events;
export type MdReplyAllSlots = typeof __propDef.slots;
export default class MdReplyAll extends SvelteComponentTyped<MdReplyAllProps, MdReplyAllEvents, MdReplyAllSlots> {
}
export {};
