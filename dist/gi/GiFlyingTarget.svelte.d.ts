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
export type GiFlyingTargetProps = typeof __propDef.props;
export type GiFlyingTargetEvents = typeof __propDef.events;
export type GiFlyingTargetSlots = typeof __propDef.slots;
export default class GiFlyingTarget extends SvelteComponentTyped<GiFlyingTargetProps, GiFlyingTargetEvents, GiFlyingTargetSlots> {
}
export {};
