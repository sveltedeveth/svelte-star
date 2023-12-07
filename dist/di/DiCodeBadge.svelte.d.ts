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
export type DiCodeBadgeProps = typeof __propDef.props;
export type DiCodeBadgeEvents = typeof __propDef.events;
export type DiCodeBadgeSlots = typeof __propDef.slots;
export default class DiCodeBadge extends SvelteComponentTyped<DiCodeBadgeProps, DiCodeBadgeEvents, DiCodeBadgeSlots> {
}
export {};
