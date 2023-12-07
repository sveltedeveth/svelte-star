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
export type FaRegIdBadgeProps = typeof __propDef.props;
export type FaRegIdBadgeEvents = typeof __propDef.events;
export type FaRegIdBadgeSlots = typeof __propDef.slots;
export default class FaRegIdBadge extends SvelteComponentTyped<FaRegIdBadgeProps, FaRegIdBadgeEvents, FaRegIdBadgeSlots> {
}
export {};
