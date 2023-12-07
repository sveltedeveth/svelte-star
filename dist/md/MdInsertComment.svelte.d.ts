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
export type MdInsertCommentProps = typeof __propDef.props;
export type MdInsertCommentEvents = typeof __propDef.events;
export type MdInsertCommentSlots = typeof __propDef.slots;
export default class MdInsertComment extends SvelteComponentTyped<MdInsertCommentProps, MdInsertCommentEvents, MdInsertCommentSlots> {
}
export {};
