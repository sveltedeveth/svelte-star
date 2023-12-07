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
export type GiThermometerHotProps = typeof __propDef.props;
export type GiThermometerHotEvents = typeof __propDef.events;
export type GiThermometerHotSlots = typeof __propDef.slots;
export default class GiThermometerHot extends SvelteComponentTyped<GiThermometerHotProps, GiThermometerHotEvents, GiThermometerHotSlots> {
}
export {};
