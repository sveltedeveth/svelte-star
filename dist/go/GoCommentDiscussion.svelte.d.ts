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
export type GoCommentDiscussionProps = typeof __propDef.props;
export type GoCommentDiscussionEvents = typeof __propDef.events;
export type GoCommentDiscussionSlots = typeof __propDef.slots;
export default class GoCommentDiscussion extends SvelteComponentTyped<GoCommentDiscussionProps, GoCommentDiscussionEvents, GoCommentDiscussionSlots> {
}
export {};
