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
export type GoMentionProps = typeof __propDef.props;
export type GoMentionEvents = typeof __propDef.events;
export type GoMentionSlots = typeof __propDef.slots;
export default class GoMention extends SvelteComponentTyped<GoMentionProps, GoMentionEvents, GoMentionSlots> {
}
export {};
