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
export type MdCommentProps = typeof __propDef.props;
export type MdCommentEvents = typeof __propDef.events;
export type MdCommentSlots = typeof __propDef.slots;
export default class MdComment extends SvelteComponentTyped<MdCommentProps, MdCommentEvents, MdCommentSlots> {
}
export {};
