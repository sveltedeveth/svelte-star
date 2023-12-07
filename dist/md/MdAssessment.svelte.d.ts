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
export type MdAssessmentProps = typeof __propDef.props;
export type MdAssessmentEvents = typeof __propDef.events;
export type MdAssessmentSlots = typeof __propDef.slots;
export default class MdAssessment extends SvelteComponentTyped<MdAssessmentProps, MdAssessmentEvents, MdAssessmentSlots> {
}
export {};
