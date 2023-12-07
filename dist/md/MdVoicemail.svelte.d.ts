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
export type MdVoicemailProps = typeof __propDef.props;
export type MdVoicemailEvents = typeof __propDef.events;
export type MdVoicemailSlots = typeof __propDef.slots;
export default class MdVoicemail extends SvelteComponentTyped<MdVoicemailProps, MdVoicemailEvents, MdVoicemailSlots> {
}
export {};
