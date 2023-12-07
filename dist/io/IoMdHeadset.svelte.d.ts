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
export type IoMdHeadsetProps = typeof __propDef.props;
export type IoMdHeadsetEvents = typeof __propDef.events;
export type IoMdHeadsetSlots = typeof __propDef.slots;
export default class IoMdHeadset extends SvelteComponentTyped<IoMdHeadsetProps, IoMdHeadsetEvents, IoMdHeadsetSlots> {
}
export {};
