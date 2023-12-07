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
export type MdFeedbackProps = typeof __propDef.props;
export type MdFeedbackEvents = typeof __propDef.events;
export type MdFeedbackSlots = typeof __propDef.slots;
export default class MdFeedback extends SvelteComponentTyped<MdFeedbackProps, MdFeedbackEvents, MdFeedbackSlots> {
}
export {};
