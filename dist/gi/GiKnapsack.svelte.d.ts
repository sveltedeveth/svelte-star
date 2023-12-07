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
export type GiKnapsackProps = typeof __propDef.props;
export type GiKnapsackEvents = typeof __propDef.events;
export type GiKnapsackSlots = typeof __propDef.slots;
export default class GiKnapsack extends SvelteComponentTyped<GiKnapsackProps, GiKnapsackEvents, GiKnapsackSlots> {
}
export {};
