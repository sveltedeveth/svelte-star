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
export type GiPowerLightningProps = typeof __propDef.props;
export type GiPowerLightningEvents = typeof __propDef.events;
export type GiPowerLightningSlots = typeof __propDef.slots;
export default class GiPowerLightning extends SvelteComponentTyped<GiPowerLightningProps, GiPowerLightningEvents, GiPowerLightningSlots> {
}
export {};
