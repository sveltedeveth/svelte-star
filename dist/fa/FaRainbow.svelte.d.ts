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
export type FaRainbowProps = typeof __propDef.props;
export type FaRainbowEvents = typeof __propDef.events;
export type FaRainbowSlots = typeof __propDef.slots;
export default class FaRainbow extends SvelteComponentTyped<FaRainbowProps, FaRainbowEvents, FaRainbowSlots> {
}
export {};
