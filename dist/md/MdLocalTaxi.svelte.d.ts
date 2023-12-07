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
export type MdLocalTaxiProps = typeof __propDef.props;
export type MdLocalTaxiEvents = typeof __propDef.events;
export type MdLocalTaxiSlots = typeof __propDef.slots;
export default class MdLocalTaxi extends SvelteComponentTyped<MdLocalTaxiProps, MdLocalTaxiEvents, MdLocalTaxiSlots> {
}
export {};
