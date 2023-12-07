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
export type FaCommentAltProps = typeof __propDef.props;
export type FaCommentAltEvents = typeof __propDef.events;
export type FaCommentAltSlots = typeof __propDef.slots;
export default class FaCommentAlt extends SvelteComponentTyped<FaCommentAltProps, FaCommentAltEvents, FaCommentAltSlots> {
}
export {};
