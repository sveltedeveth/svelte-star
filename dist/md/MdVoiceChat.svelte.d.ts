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
export type MdVoiceChatProps = typeof __propDef.props;
export type MdVoiceChatEvents = typeof __propDef.events;
export type MdVoiceChatSlots = typeof __propDef.slots;
export default class MdVoiceChat extends SvelteComponentTyped<MdVoiceChatProps, MdVoiceChatEvents, MdVoiceChatSlots> {
}
export {};
