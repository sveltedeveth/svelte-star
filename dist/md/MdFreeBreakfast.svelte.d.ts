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
export type MdFreeBreakfastProps = typeof __propDef.props;
export type MdFreeBreakfastEvents = typeof __propDef.events;
export type MdFreeBreakfastSlots = typeof __propDef.slots;
export default class MdFreeBreakfast extends SvelteComponentTyped<MdFreeBreakfastProps, MdFreeBreakfastEvents, MdFreeBreakfastSlots> {
}
export {};
