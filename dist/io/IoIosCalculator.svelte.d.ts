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
export type IoIosCalculatorProps = typeof __propDef.props;
export type IoIosCalculatorEvents = typeof __propDef.events;
export type IoIosCalculatorSlots = typeof __propDef.slots;
export default class IoIosCalculator extends SvelteComponentTyped<IoIosCalculatorProps, IoIosCalculatorEvents, IoIosCalculatorSlots> {
}
export {};
