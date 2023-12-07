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
export type WiRainProps = typeof __propDef.props;
export type WiRainEvents = typeof __propDef.events;
export type WiRainSlots = typeof __propDef.slots;
export default class WiRain extends SvelteComponentTyped<WiRainProps, WiRainEvents, WiRainSlots> {
}
export {};
