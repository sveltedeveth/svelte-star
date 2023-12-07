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
export type GiHeavyLightningProps = typeof __propDef.props;
export type GiHeavyLightningEvents = typeof __propDef.events;
export type GiHeavyLightningSlots = typeof __propDef.slots;
export default class GiHeavyLightning extends SvelteComponentTyped<GiHeavyLightningProps, GiHeavyLightningEvents, GiHeavyLightningSlots> {
}
export {};
