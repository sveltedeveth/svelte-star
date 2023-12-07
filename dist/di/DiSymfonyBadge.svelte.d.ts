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
export type DiSymfonyBadgeProps = typeof __propDef.props;
export type DiSymfonyBadgeEvents = typeof __propDef.events;
export type DiSymfonyBadgeSlots = typeof __propDef.slots;
export default class DiSymfonyBadge extends SvelteComponentTyped<DiSymfonyBadgeProps, DiSymfonyBadgeEvents, DiSymfonyBadgeSlots> {
}
export {};
