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
export type GiChainLightningProps = typeof __propDef.props;
export type GiChainLightningEvents = typeof __propDef.events;
export type GiChainLightningSlots = typeof __propDef.slots;
export default class GiChainLightning extends SvelteComponentTyped<GiChainLightningProps, GiChainLightningEvents, GiChainLightningSlots> {
}
export {};
