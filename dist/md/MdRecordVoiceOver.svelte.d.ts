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
export type MdRecordVoiceOverProps = typeof __propDef.props;
export type MdRecordVoiceOverEvents = typeof __propDef.events;
export type MdRecordVoiceOverSlots = typeof __propDef.slots;
export default class MdRecordVoiceOver extends SvelteComponentTyped<MdRecordVoiceOverProps, MdRecordVoiceOverEvents, MdRecordVoiceOverSlots> {
}
export {};
