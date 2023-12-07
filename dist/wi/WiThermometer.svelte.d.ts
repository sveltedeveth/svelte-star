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
export type WiThermometerProps = typeof __propDef.props;
export type WiThermometerEvents = typeof __propDef.events;
export type WiThermometerSlots = typeof __propDef.slots;
export default class WiThermometer extends SvelteComponentTyped<WiThermometerProps, WiThermometerEvents, WiThermometerSlots> {
}
export {};
