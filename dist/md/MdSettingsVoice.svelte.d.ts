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
export type MdSettingsVoiceProps = typeof __propDef.props;
export type MdSettingsVoiceEvents = typeof __propDef.events;
export type MdSettingsVoiceSlots = typeof __propDef.slots;
export default class MdSettingsVoice extends SvelteComponentTyped<MdSettingsVoiceProps, MdSettingsVoiceEvents, MdSettingsVoiceSlots> {
}
export {};
