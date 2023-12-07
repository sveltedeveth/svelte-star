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
export type DiMootoolsBadgeProps = typeof __propDef.props;
export type DiMootoolsBadgeEvents = typeof __propDef.events;
export type DiMootoolsBadgeSlots = typeof __propDef.slots;
export default class DiMootoolsBadge extends SvelteComponentTyped<DiMootoolsBadgeProps, DiMootoolsBadgeEvents, DiMootoolsBadgeSlots> {
}
export {};
