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
export type WiNightSnowWindProps = typeof __propDef.props;
export type WiNightSnowWindEvents = typeof __propDef.events;
export type WiNightSnowWindSlots = typeof __propDef.slots;
export default class WiNightSnowWind extends SvelteComponentTyped<WiNightSnowWindProps, WiNightSnowWindEvents, WiNightSnowWindSlots> {
}
export {};
