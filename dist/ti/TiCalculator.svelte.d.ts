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
export type TiCalculatorProps = typeof __propDef.props;
export type TiCalculatorEvents = typeof __propDef.events;
export type TiCalculatorSlots = typeof __propDef.slots;
export default class TiCalculator extends SvelteComponentTyped<TiCalculatorProps, TiCalculatorEvents, TiCalculatorSlots> {
}
export {};
