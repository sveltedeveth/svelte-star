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
export type MdHeadsetProps = typeof __propDef.props;
export type MdHeadsetEvents = typeof __propDef.events;
export type MdHeadsetSlots = typeof __propDef.slots;
export default class MdHeadset extends SvelteComponentTyped<MdHeadsetProps, MdHeadsetEvents, MdHeadsetSlots> {
}
export {};
