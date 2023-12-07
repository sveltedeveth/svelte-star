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
export type FaCalculatorProps = typeof __propDef.props;
export type FaCalculatorEvents = typeof __propDef.events;
export type FaCalculatorSlots = typeof __propDef.slots;
export default class FaCalculator extends SvelteComponentTyped<FaCalculatorProps, FaCalculatorEvents, FaCalculatorSlots> {
}
export {};
