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
export type IoMdChatboxesProps = typeof __propDef.props;
export type IoMdChatboxesEvents = typeof __propDef.events;
export type IoMdChatboxesSlots = typeof __propDef.slots;
export default class IoMdChatboxes extends SvelteComponentTyped<IoMdChatboxesProps, IoMdChatboxesEvents, IoMdChatboxesSlots> {
}
export {};
