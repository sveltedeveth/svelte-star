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
export type TiMessageTypingProps = typeof __propDef.props;
export type TiMessageTypingEvents = typeof __propDef.events;
export type TiMessageTypingSlots = typeof __propDef.slots;
export default class TiMessageTyping extends SvelteComponentTyped<TiMessageTypingProps, TiMessageTypingEvents, TiMessageTypingSlots> {
}
export {};
