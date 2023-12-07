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
export type FaCommentsDollarProps = typeof __propDef.props;
export type FaCommentsDollarEvents = typeof __propDef.events;
export type FaCommentsDollarSlots = typeof __propDef.slots;
export default class FaCommentsDollar extends SvelteComponentTyped<FaCommentsDollarProps, FaCommentsDollarEvents, FaCommentsDollarSlots> {
}
export {};
