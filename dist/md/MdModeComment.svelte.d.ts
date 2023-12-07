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
export type MdModeCommentProps = typeof __propDef.props;
export type MdModeCommentEvents = typeof __propDef.events;
export type MdModeCommentSlots = typeof __propDef.slots;
export default class MdModeComment extends SvelteComponentTyped<MdModeCommentProps, MdModeCommentEvents, MdModeCommentSlots> {
}
export {};
