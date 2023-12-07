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
export type MdSpeakerProps = typeof __propDef.props;
export type MdSpeakerEvents = typeof __propDef.events;
export type MdSpeakerSlots = typeof __propDef.slots;
export default class MdSpeaker extends SvelteComponentTyped<MdSpeakerProps, MdSpeakerEvents, MdSpeakerSlots> {
}
export {};
