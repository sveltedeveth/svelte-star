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
export type GiLightningTrioProps = typeof __propDef.props;
export type GiLightningTrioEvents = typeof __propDef.events;
export type GiLightningTrioSlots = typeof __propDef.slots;
export default class GiLightningTrio extends SvelteComponentTyped<GiLightningTrioProps, GiLightningTrioEvents, GiLightningTrioSlots> {
}
export {};
