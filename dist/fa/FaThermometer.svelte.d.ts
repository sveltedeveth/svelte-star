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
export type FaThermometerProps = typeof __propDef.props;
export type FaThermometerEvents = typeof __propDef.events;
export type FaThermometerSlots = typeof __propDef.slots;
export default class FaThermometer extends SvelteComponentTyped<FaThermometerProps, FaThermometerEvents, FaThermometerSlots> {
}
export {};
