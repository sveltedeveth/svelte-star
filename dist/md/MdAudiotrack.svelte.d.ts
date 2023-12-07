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
export type MdAudiotrackProps = typeof __propDef.props;
export type MdAudiotrackEvents = typeof __propDef.events;
export type MdAudiotrackSlots = typeof __propDef.slots;
export default class MdAudiotrack extends SvelteComponentTyped<MdAudiotrackProps, MdAudiotrackEvents, MdAudiotrackSlots> {
}
export {};
