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
export type MdChatBubbleProps = typeof __propDef.props;
export type MdChatBubbleEvents = typeof __propDef.events;
export type MdChatBubbleSlots = typeof __propDef.slots;
export default class MdChatBubble extends SvelteComponentTyped<MdChatBubbleProps, MdChatBubbleEvents, MdChatBubbleSlots> {
}
export {};
