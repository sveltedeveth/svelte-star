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
export type MdKeyboardVoiceProps = typeof __propDef.props;
export type MdKeyboardVoiceEvents = typeof __propDef.events;
export type MdKeyboardVoiceSlots = typeof __propDef.slots;
export default class MdKeyboardVoice extends SvelteComponentTyped<MdKeyboardVoiceProps, MdKeyboardVoiceEvents, MdKeyboardVoiceSlots> {
}
export {};
