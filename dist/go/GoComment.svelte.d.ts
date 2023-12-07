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
export type GoCommentProps = typeof __propDef.props;
export type GoCommentEvents = typeof __propDef.events;
export type GoCommentSlots = typeof __propDef.slots;
export default class GoComment extends SvelteComponentTyped<GoCommentProps, GoCommentEvents, GoCommentSlots> {
}
export {};
