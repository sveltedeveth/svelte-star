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
export type FaCommentProps = typeof __propDef.props;
export type FaCommentEvents = typeof __propDef.events;
export type FaCommentSlots = typeof __propDef.slots;
export default class FaComment extends SvelteComponentTyped<FaCommentProps, FaCommentEvents, FaCommentSlots> {
}
export {};
