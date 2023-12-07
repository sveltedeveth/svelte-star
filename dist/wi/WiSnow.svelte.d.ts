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
export type WiSnowProps = typeof __propDef.props;
export type WiSnowEvents = typeof __propDef.events;
export type WiSnowSlots = typeof __propDef.slots;
export default class WiSnow extends SvelteComponentTyped<WiSnowProps, WiSnowEvents, WiSnowSlots> {
}
export {};
