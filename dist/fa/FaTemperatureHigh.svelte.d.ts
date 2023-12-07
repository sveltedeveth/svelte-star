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
export type FaTemperatureHighProps = typeof __propDef.props;
export type FaTemperatureHighEvents = typeof __propDef.events;
export type FaTemperatureHighSlots = typeof __propDef.slots;
export default class FaTemperatureHigh extends SvelteComponentTyped<FaTemperatureHighProps, FaTemperatureHighEvents, FaTemperatureHighSlots> {
}
export {};
