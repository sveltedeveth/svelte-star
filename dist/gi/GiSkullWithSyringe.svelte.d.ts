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
export type GiSkullWithSyringeProps = typeof __propDef.props;
export type GiSkullWithSyringeEvents = typeof __propDef.events;
export type GiSkullWithSyringeSlots = typeof __propDef.slots;
export default class GiSkullWithSyringe extends SvelteComponentTyped<GiSkullWithSyringeProps, GiSkullWithSyringeEvents, GiSkullWithSyringeSlots> {
}
export {};
