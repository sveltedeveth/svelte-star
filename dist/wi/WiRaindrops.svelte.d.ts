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
export type WiRaindropsProps = typeof __propDef.props;
export type WiRaindropsEvents = typeof __propDef.events;
export type WiRaindropsSlots = typeof __propDef.slots;
export default class WiRaindrops extends SvelteComponentTyped<WiRaindropsProps, WiRaindropsEvents, WiRaindropsSlots> {
}
export {};
