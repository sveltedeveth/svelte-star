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
export type FaIdBadgeProps = typeof __propDef.props;
export type FaIdBadgeEvents = typeof __propDef.events;
export type FaIdBadgeSlots = typeof __propDef.slots;
export default class FaIdBadge extends SvelteComponentTyped<FaIdBadgeProps, FaIdBadgeEvents, FaIdBadgeSlots> {
}
export {};
