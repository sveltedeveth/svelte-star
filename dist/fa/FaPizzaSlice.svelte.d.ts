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
export type FaPizzaSliceProps = typeof __propDef.props;
export type FaPizzaSliceEvents = typeof __propDef.events;
export type FaPizzaSliceSlots = typeof __propDef.slots;
export default class FaPizzaSlice extends SvelteComponentTyped<FaPizzaSliceProps, FaPizzaSliceEvents, FaPizzaSliceSlots> {
}
export {};
