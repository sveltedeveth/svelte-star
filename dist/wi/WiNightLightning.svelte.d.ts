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
export type WiNightLightningProps = typeof __propDef.props;
export type WiNightLightningEvents = typeof __propDef.events;
export type WiNightLightningSlots = typeof __propDef.slots;
export default class WiNightLightning extends SvelteComponentTyped<WiNightLightningProps, WiNightLightningEvents, WiNightLightningSlots> {
}
export {};
