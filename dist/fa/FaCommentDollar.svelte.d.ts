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
export type FaCommentDollarProps = typeof __propDef.props;
export type FaCommentDollarEvents = typeof __propDef.events;
export type FaCommentDollarSlots = typeof __propDef.slots;
export default class FaCommentDollar extends SvelteComponentTyped<FaCommentDollarProps, FaCommentDollarEvents, FaCommentDollarSlots> {
}
export {};
