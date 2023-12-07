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
export type DiJsBadgeProps = typeof __propDef.props;
export type DiJsBadgeEvents = typeof __propDef.events;
export type DiJsBadgeSlots = typeof __propDef.slots;
export default class DiJsBadge extends SvelteComponentTyped<DiJsBadgeProps, DiJsBadgeEvents, DiJsBadgeSlots> {
}
export {};
