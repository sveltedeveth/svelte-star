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
export type GiLightningBowProps = typeof __propDef.props;
export type GiLightningBowEvents = typeof __propDef.events;
export type GiLightningBowSlots = typeof __propDef.slots;
export default class GiLightningBow extends SvelteComponentTyped<GiLightningBowProps, GiLightningBowEvents, GiLightningBowSlots> {
}
export {};
