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
export type FaTemperatureLowProps = typeof __propDef.props;
export type FaTemperatureLowEvents = typeof __propDef.events;
export type FaTemperatureLowSlots = typeof __propDef.slots;
export default class FaTemperatureLow extends SvelteComponentTyped<FaTemperatureLowProps, FaTemperatureLowEvents, FaTemperatureLowSlots> {
}
export {};
