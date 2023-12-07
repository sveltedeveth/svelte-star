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
export type IoMdChatbubblesProps = typeof __propDef.props;
export type IoMdChatbubblesEvents = typeof __propDef.events;
export type IoMdChatbubblesSlots = typeof __propDef.slots;
export default class IoMdChatbubbles extends SvelteComponentTyped<IoMdChatbubblesProps, IoMdChatbubblesEvents, IoMdChatbubblesSlots> {
}
export {};
