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
export type FaRegCommentProps = typeof __propDef.props;
export type FaRegCommentEvents = typeof __propDef.events;
export type FaRegCommentSlots = typeof __propDef.slots;
export default class FaRegComment extends SvelteComponentTyped<FaRegCommentProps, FaRegCommentEvents, FaRegCommentSlots> {
}
export {};
