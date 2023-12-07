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
export type WiRainWindProps = typeof __propDef.props;
export type WiRainWindEvents = typeof __propDef.events;
export type WiRainWindSlots = typeof __propDef.slots;
export default class WiRainWind extends SvelteComponentTyped<WiRainWindProps, WiRainWindEvents, WiRainWindSlots> {
}
export {};
