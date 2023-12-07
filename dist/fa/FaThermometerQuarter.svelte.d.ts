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
export type FaThermometerQuarterProps = typeof __propDef.props;
export type FaThermometerQuarterEvents = typeof __propDef.events;
export type FaThermometerQuarterSlots = typeof __propDef.slots;
export default class FaThermometerQuarter extends SvelteComponentTyped<FaThermometerQuarterProps, FaThermometerQuarterEvents, FaThermometerQuarterSlots> {
}
export {};
