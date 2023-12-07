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
export type WiDayRainMixProps = typeof __propDef.props;
export type WiDayRainMixEvents = typeof __propDef.events;
export type WiDayRainMixSlots = typeof __propDef.slots;
export default class WiDayRainMix extends SvelteComponentTyped<WiDayRainMixProps, WiDayRainMixEvents, WiDayRainMixSlots> {
}
export {};
