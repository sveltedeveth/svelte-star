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
export type GiSpeakerOffProps = typeof __propDef.props;
export type GiSpeakerOffEvents = typeof __propDef.events;
export type GiSpeakerOffSlots = typeof __propDef.slots;
export default class GiSpeakerOff extends SvelteComponentTyped<GiSpeakerOffProps, GiSpeakerOffEvents, GiSpeakerOffSlots> {
}
export {};
