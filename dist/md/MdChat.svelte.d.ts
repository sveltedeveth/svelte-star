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
export type MdChatProps = typeof __propDef.props;
export type MdChatEvents = typeof __propDef.events;
export type MdChatSlots = typeof __propDef.slots;
export default class MdChat extends SvelteComponentTyped<MdChatProps, MdChatEvents, MdChatSlots> {
}
export {};
