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
export type GiThermometerScaleProps = typeof __propDef.props;
export type GiThermometerScaleEvents = typeof __propDef.events;
export type GiThermometerScaleSlots = typeof __propDef.slots;
export default class GiThermometerScale extends SvelteComponentTyped<GiThermometerScaleProps, GiThermometerScaleEvents, GiThermometerScaleSlots> {
}
export {};
