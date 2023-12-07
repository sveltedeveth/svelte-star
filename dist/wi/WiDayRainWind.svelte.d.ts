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
export type WiDayRainWindProps = typeof __propDef.props;
export type WiDayRainWindEvents = typeof __propDef.events;
export type WiDayRainWindSlots = typeof __propDef.slots;
export default class WiDayRainWind extends SvelteComponentTyped<WiDayRainWindProps, WiDayRainWindEvents, WiDayRainWindSlots> {
}
export {};
