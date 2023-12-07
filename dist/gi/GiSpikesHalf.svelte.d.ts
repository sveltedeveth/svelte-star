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
export type GiSpikesHalfProps = typeof __propDef.props;
export type GiSpikesHalfEvents = typeof __propDef.events;
export type GiSpikesHalfSlots = typeof __propDef.slots;
export default class GiSpikesHalf extends SvelteComponentTyped<GiSpikesHalfProps, GiSpikesHalfEvents, GiSpikesHalfSlots> {
}
export {};
