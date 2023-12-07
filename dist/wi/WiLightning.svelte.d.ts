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
export type WiLightningProps = typeof __propDef.props;
export type WiLightningEvents = typeof __propDef.events;
export type WiLightningSlots = typeof __propDef.slots;
export default class WiLightning extends SvelteComponentTyped<WiLightningProps, WiLightningEvents, WiLightningSlots> {
}
export {};
