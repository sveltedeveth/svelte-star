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
export type GiPoliceBadgeProps = typeof __propDef.props;
export type GiPoliceBadgeEvents = typeof __propDef.events;
export type GiPoliceBadgeSlots = typeof __propDef.slots;
export default class GiPoliceBadge extends SvelteComponentTyped<GiPoliceBadgeProps, GiPoliceBadgeEvents, GiPoliceBadgeSlots> {
}
export {};
