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
export type GiConversationProps = typeof __propDef.props;
export type GiConversationEvents = typeof __propDef.events;
export type GiConversationSlots = typeof __propDef.slots;
export default class GiConversation extends SvelteComponentTyped<GiConversationProps, GiConversationEvents, GiConversationSlots> {
}
export {};
