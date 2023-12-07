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
export type WiSunriseProps = typeof __propDef.props;
export type WiSunriseEvents = typeof __propDef.events;
export type WiSunriseSlots = typeof __propDef.slots;
export default class WiSunrise extends SvelteComponentTyped<WiSunriseProps, WiSunriseEvents, WiSunriseSlots> {
}
export {};
