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
export type WiRainMixProps = typeof __propDef.props;
export type WiRainMixEvents = typeof __propDef.events;
export type WiRainMixSlots = typeof __propDef.slots;
export default class WiRainMix extends SvelteComponentTyped<WiRainMixProps, WiRainMixEvents, WiRainMixSlots> {
}
export {};
