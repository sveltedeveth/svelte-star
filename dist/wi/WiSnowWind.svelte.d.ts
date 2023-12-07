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
export type WiSnowWindProps = typeof __propDef.props;
export type WiSnowWindEvents = typeof __propDef.events;
export type WiSnowWindSlots = typeof __propDef.slots;
export default class WiSnowWind extends SvelteComponentTyped<WiSnowWindProps, WiSnowWindEvents, WiSnowWindSlots> {
}
export {};
