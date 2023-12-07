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
export type FaVoicemailProps = typeof __propDef.props;
export type FaVoicemailEvents = typeof __propDef.events;
export type FaVoicemailSlots = typeof __propDef.slots;
export default class FaVoicemail extends SvelteComponentTyped<FaVoicemailProps, FaVoicemailEvents, FaVoicemailSlots> {
}
export {};
