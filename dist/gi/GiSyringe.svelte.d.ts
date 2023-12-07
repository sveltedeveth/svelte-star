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
export type GiSyringeProps = typeof __propDef.props;
export type GiSyringeEvents = typeof __propDef.events;
export type GiSyringeSlots = typeof __propDef.slots;
export default class GiSyringe extends SvelteComponentTyped<GiSyringeProps, GiSyringeEvents, GiSyringeSlots> {
}
export {};
