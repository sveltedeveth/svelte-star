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
export type GiThermometerColdProps = typeof __propDef.props;
export type GiThermometerColdEvents = typeof __propDef.events;
export type GiThermometerColdSlots = typeof __propDef.slots;
export default class GiThermometerCold extends SvelteComponentTyped<GiThermometerColdProps, GiThermometerColdEvents, GiThermometerColdSlots> {
}
export {};
