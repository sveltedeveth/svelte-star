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
export type FaTaxiProps = typeof __propDef.props;
export type FaTaxiEvents = typeof __propDef.events;
export type FaTaxiSlots = typeof __propDef.slots;
export default class FaTaxi extends SvelteComponentTyped<FaTaxiProps, FaTaxiEvents, FaTaxiSlots> {
}
export {};
