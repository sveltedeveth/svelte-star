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
export type FaSyringeProps = typeof __propDef.props;
export type FaSyringeEvents = typeof __propDef.events;
export type FaSyringeSlots = typeof __propDef.slots;
export default class FaSyringe extends SvelteComponentTyped<FaSyringeProps, FaSyringeEvents, FaSyringeSlots> {
}
export {};
