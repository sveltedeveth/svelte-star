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
export type MdSentimentNeutralProps = typeof __propDef.props;
export type MdSentimentNeutralEvents = typeof __propDef.events;
export type MdSentimentNeutralSlots = typeof __propDef.slots;
export default class MdSentimentNeutral extends SvelteComponentTyped<MdSentimentNeutralProps, MdSentimentNeutralEvents, MdSentimentNeutralSlots> {
}
export {};
