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
export type GiRunningShoeProps = typeof __propDef.props;
export type GiRunningShoeEvents = typeof __propDef.events;
export type GiRunningShoeSlots = typeof __propDef.slots;
export default class GiRunningShoe extends SvelteComponentTyped<GiRunningShoeProps, GiRunningShoeEvents, GiRunningShoeSlots> {
}
export {};
