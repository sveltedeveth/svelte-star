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
export type MdHeadsetMicProps = typeof __propDef.props;
export type MdHeadsetMicEvents = typeof __propDef.events;
export type MdHeadsetMicSlots = typeof __propDef.slots;
export default class MdHeadsetMic extends SvelteComponentTyped<MdHeadsetMicProps, MdHeadsetMicEvents, MdHeadsetMicSlots> {
}
export {};
