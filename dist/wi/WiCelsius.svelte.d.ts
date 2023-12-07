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
export type WiCelsiusProps = typeof __propDef.props;
export type WiCelsiusEvents = typeof __propDef.events;
export type WiCelsiusSlots = typeof __propDef.slots;
export default class WiCelsius extends SvelteComponentTyped<WiCelsiusProps, WiCelsiusEvents, WiCelsiusSlots> {
}
export {};
