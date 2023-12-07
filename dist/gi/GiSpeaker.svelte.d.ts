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
export type GiSpeakerProps = typeof __propDef.props;
export type GiSpeakerEvents = typeof __propDef.events;
export type GiSpeakerSlots = typeof __propDef.slots;
export default class GiSpeaker extends SvelteComponentTyped<GiSpeakerProps, GiSpeakerEvents, GiSpeakerSlots> {
}
export {};
