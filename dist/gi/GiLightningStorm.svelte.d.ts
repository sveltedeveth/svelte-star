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
export type GiLightningStormProps = typeof __propDef.props;
export type GiLightningStormEvents = typeof __propDef.events;
export type GiLightningStormSlots = typeof __propDef.slots;
export default class GiLightningStorm extends SvelteComponentTyped<GiLightningStormProps, GiLightningStormEvents, GiLightningStormSlots> {
}
export {};
