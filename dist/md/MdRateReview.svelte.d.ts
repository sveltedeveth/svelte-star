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
export type MdRateReviewProps = typeof __propDef.props;
export type MdRateReviewEvents = typeof __propDef.events;
export type MdRateReviewSlots = typeof __propDef.slots;
export default class MdRateReview extends SvelteComponentTyped<MdRateReviewProps, MdRateReviewEvents, MdRateReviewSlots> {
}
export {};
