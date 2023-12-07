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
export type MdSentimentSatisfiedProps = typeof __propDef.props;
export type MdSentimentSatisfiedEvents = typeof __propDef.events;
export type MdSentimentSatisfiedSlots = typeof __propDef.slots;
export default class MdSentimentSatisfied extends SvelteComponentTyped<MdSentimentSatisfiedProps, MdSentimentSatisfiedEvents, MdSentimentSatisfiedSlots> {
}
export {};
