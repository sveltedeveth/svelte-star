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
export type FaCommentSlashProps = typeof __propDef.props;
export type FaCommentSlashEvents = typeof __propDef.events;
export type FaCommentSlashSlots = typeof __propDef.slots;
export default class FaCommentSlash extends SvelteComponentTyped<FaCommentSlashProps, FaCommentSlashEvents, FaCommentSlashSlots> {
}
export {};
