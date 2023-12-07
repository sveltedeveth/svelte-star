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
export type GiOnTargetProps = typeof __propDef.props;
export type GiOnTargetEvents = typeof __propDef.events;
export type GiOnTargetSlots = typeof __propDef.slots;
export default class GiOnTarget extends SvelteComponentTyped<GiOnTargetProps, GiOnTargetEvents, GiOnTargetSlots> {
}
export {};
