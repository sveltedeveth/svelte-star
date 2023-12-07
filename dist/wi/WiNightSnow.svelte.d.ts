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
export type WiNightSnowProps = typeof __propDef.props;
export type WiNightSnowEvents = typeof __propDef.events;
export type WiNightSnowSlots = typeof __propDef.slots;
export default class WiNightSnow extends SvelteComponentTyped<WiNightSnowProps, WiNightSnowEvents, WiNightSnowSlots> {
}
export {};
