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
export type GiPizzaSliceProps = typeof __propDef.props;
export type GiPizzaSliceEvents = typeof __propDef.events;
export type GiPizzaSliceSlots = typeof __propDef.slots;
export default class GiPizzaSlice extends SvelteComponentTyped<GiPizzaSliceProps, GiPizzaSliceEvents, GiPizzaSliceSlots> {
}
export {};
