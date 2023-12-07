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
export type FaFileAudioProps = typeof __propDef.props;
export type FaFileAudioEvents = typeof __propDef.events;
export type FaFileAudioSlots = typeof __propDef.slots;
export default class FaFileAudio extends SvelteComponentTyped<FaFileAudioProps, FaFileAudioEvents, FaFileAudioSlots> {
}
export {};
