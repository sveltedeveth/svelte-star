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
export type DiKrakenjsBadgeProps = typeof __propDef.props;
export type DiKrakenjsBadgeEvents = typeof __propDef.events;
export type DiKrakenjsBadgeSlots = typeof __propDef.slots;
export default class DiKrakenjsBadge extends SvelteComponentTyped<DiKrakenjsBadgeProps, DiKrakenjsBadgeEvents, DiKrakenjsBadgeSlots> {
}
export {};
