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
export type WiNightAltRainProps = typeof __propDef.props;
export type WiNightAltRainEvents = typeof __propDef.events;
export type WiNightAltRainSlots = typeof __propDef.slots;
export default class WiNightAltRain extends SvelteComponentTyped<WiNightAltRainProps, WiNightAltRainEvents, WiNightAltRainSlots> {
}
export {};
