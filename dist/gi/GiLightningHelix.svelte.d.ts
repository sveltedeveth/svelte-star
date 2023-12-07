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
export type GiLightningHelixProps = typeof __propDef.props;
export type GiLightningHelixEvents = typeof __propDef.events;
export type GiLightningHelixSlots = typeof __propDef.slots;
export default class GiLightningHelix extends SvelteComponentTyped<GiLightningHelixProps, GiLightningHelixEvents, GiLightningHelixSlots> {
}
export {};
