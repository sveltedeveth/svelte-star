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
export type FaAudioDescriptionProps = typeof __propDef.props;
export type FaAudioDescriptionEvents = typeof __propDef.events;
export type FaAudioDescriptionSlots = typeof __propDef.slots;
export default class FaAudioDescription extends SvelteComponentTyped<FaAudioDescriptionProps, FaAudioDescriptionEvents, FaAudioDescriptionSlots> {
}
export {};
