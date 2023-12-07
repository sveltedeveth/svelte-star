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
export type MdSpeakerGroupProps = typeof __propDef.props;
export type MdSpeakerGroupEvents = typeof __propDef.events;
export type MdSpeakerGroupSlots = typeof __propDef.slots;
export default class MdSpeakerGroup extends SvelteComponentTyped<MdSpeakerGroupProps, MdSpeakerGroupEvents, MdSpeakerGroupSlots> {
}
export {};
