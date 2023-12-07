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
export type MdQuestionAnswerProps = typeof __propDef.props;
export type MdQuestionAnswerEvents = typeof __propDef.events;
export type MdQuestionAnswerSlots = typeof __propDef.slots;
export default class MdQuestionAnswer extends SvelteComponentTyped<MdQuestionAnswerProps, MdQuestionAnswerEvents, MdQuestionAnswerSlots> {
}
export {};
