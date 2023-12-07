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
export type IoMdHeartHalfProps = typeof __propDef.props;
export type IoMdHeartHalfEvents = typeof __propDef.events;
export type IoMdHeartHalfSlots = typeof __propDef.slots;
export default class IoMdHeartHalf extends SvelteComponentTyped<IoMdHeartHalfProps, IoMdHeartHalfEvents, IoMdHeartHalfSlots> {
}
export {};
