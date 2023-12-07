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
export type IoMdCalculatorProps = typeof __propDef.props;
export type IoMdCalculatorEvents = typeof __propDef.events;
export type IoMdCalculatorSlots = typeof __propDef.slots;
export default class IoMdCalculator extends SvelteComponentTyped<IoMdCalculatorProps, IoMdCalculatorEvents, IoMdCalculatorSlots> {
}
export {};
