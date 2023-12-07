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
export type FaCommentMedicalProps = typeof __propDef.props;
export type FaCommentMedicalEvents = typeof __propDef.events;
export type FaCommentMedicalSlots = typeof __propDef.slots;
export default class FaCommentMedical extends SvelteComponentTyped<FaCommentMedicalProps, FaCommentMedicalEvents, FaCommentMedicalSlots> {
}
export {};
