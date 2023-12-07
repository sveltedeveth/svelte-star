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
export type WiNightAltSnowProps = typeof __propDef.props;
export type WiNightAltSnowEvents = typeof __propDef.events;
export type WiNightAltSnowSlots = typeof __propDef.slots;
export default class WiNightAltSnow extends SvelteComponentTyped<WiNightAltSnowProps, WiNightAltSnowEvents, WiNightAltSnowSlots> {
}
export {};
