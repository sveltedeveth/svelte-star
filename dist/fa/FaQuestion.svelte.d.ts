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
export type FaQuestionProps = typeof __propDef.props;
export type FaQuestionEvents = typeof __propDef.events;
export type FaQuestionSlots = typeof __propDef.slots;
export default class FaQuestion extends SvelteComponentTyped<FaQuestionProps, FaQuestionEvents, FaQuestionSlots> {
}
export {};
