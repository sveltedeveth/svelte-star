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
export type GiPublicSpeakerProps = typeof __propDef.props;
export type GiPublicSpeakerEvents = typeof __propDef.events;
export type GiPublicSpeakerSlots = typeof __propDef.slots;
export default class GiPublicSpeaker extends SvelteComponentTyped<GiPublicSpeakerProps, GiPublicSpeakerEvents, GiPublicSpeakerSlots> {
}
export {};
