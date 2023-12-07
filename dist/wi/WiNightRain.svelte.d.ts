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
export type WiNightRainProps = typeof __propDef.props;
export type WiNightRainEvents = typeof __propDef.events;
export type WiNightRainSlots = typeof __propDef.slots;
export default class WiNightRain extends SvelteComponentTyped<WiNightRainProps, WiNightRainEvents, WiNightRainSlots> {
}
export {};
