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
export type WiNightRainMixProps = typeof __propDef.props;
export type WiNightRainMixEvents = typeof __propDef.events;
export type WiNightRainMixSlots = typeof __propDef.slots;
export default class WiNightRainMix extends SvelteComponentTyped<WiNightRainMixProps, WiNightRainMixEvents, WiNightRainMixSlots> {
}
export {};
