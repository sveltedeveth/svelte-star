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
export type TiThermometerProps = typeof __propDef.props;
export type TiThermometerEvents = typeof __propDef.events;
export type TiThermometerSlots = typeof __propDef.slots;
export default class TiThermometer extends SvelteComponentTyped<TiThermometerProps, TiThermometerEvents, TiThermometerSlots> {
}
export {};
