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
export type WiThermometerInternalProps = typeof __propDef.props;
export type WiThermometerInternalEvents = typeof __propDef.events;
export type WiThermometerInternalSlots = typeof __propDef.slots;
export default class WiThermometerInternal extends SvelteComponentTyped<WiThermometerInternalProps, WiThermometerInternalEvents, WiThermometerInternalSlots> {
}
export {};
