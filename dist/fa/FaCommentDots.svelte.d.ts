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
export type FaCommentDotsProps = typeof __propDef.props;
export type FaCommentDotsEvents = typeof __propDef.events;
export type FaCommentDotsSlots = typeof __propDef.slots;
export default class FaCommentDots extends SvelteComponentTyped<FaCommentDotsProps, FaCommentDotsEvents, FaCommentDotsSlots> {
}
export {};
