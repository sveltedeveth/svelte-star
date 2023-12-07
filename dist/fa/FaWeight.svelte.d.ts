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
export type FaWeightProps = typeof __propDef.props;
export type FaWeightEvents = typeof __propDef.events;
export type FaWeightSlots = typeof __propDef.slots;
export default class FaWeight extends SvelteComponentTyped<FaWeightProps, FaWeightEvents, FaWeightSlots> {
}
export {};
