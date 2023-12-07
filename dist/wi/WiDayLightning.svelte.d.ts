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
export type WiDayLightningProps = typeof __propDef.props;
export type WiDayLightningEvents = typeof __propDef.events;
export type WiDayLightningSlots = typeof __propDef.slots;
export default class WiDayLightning extends SvelteComponentTyped<WiDayLightningProps, WiDayLightningEvents, WiDayLightningSlots> {
}
export {};
