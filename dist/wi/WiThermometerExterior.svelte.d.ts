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
export type WiThermometerExteriorProps = typeof __propDef.props;
export type WiThermometerExteriorEvents = typeof __propDef.events;
export type WiThermometerExteriorSlots = typeof __propDef.slots;
export default class WiThermometerExterior extends SvelteComponentTyped<WiThermometerExteriorProps, WiThermometerExteriorEvents, WiThermometerExteriorSlots> {
}
export {};
