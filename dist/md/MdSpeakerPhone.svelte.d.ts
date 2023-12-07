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
export type MdSpeakerPhoneProps = typeof __propDef.props;
export type MdSpeakerPhoneEvents = typeof __propDef.events;
export type MdSpeakerPhoneSlots = typeof __propDef.slots;
export default class MdSpeakerPhone extends SvelteComponentTyped<MdSpeakerPhoneProps, MdSpeakerPhoneEvents, MdSpeakerPhoneSlots> {
}
export {};
