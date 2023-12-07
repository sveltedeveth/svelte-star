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
export type WiHumidityProps = typeof __propDef.props;
export type WiHumidityEvents = typeof __propDef.events;
export type WiHumiditySlots = typeof __propDef.slots;
export default class WiHumidity extends SvelteComponentTyped<WiHumidityProps, WiHumidityEvents, WiHumiditySlots> {
}
export {};
