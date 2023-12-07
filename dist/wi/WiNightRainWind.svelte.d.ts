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
export type WiNightRainWindProps = typeof __propDef.props;
export type WiNightRainWindEvents = typeof __propDef.events;
export type WiNightRainWindSlots = typeof __propDef.slots;
export default class WiNightRainWind extends SvelteComponentTyped<WiNightRainWindProps, WiNightRainWindEvents, WiNightRainWindSlots> {
}
export {};
