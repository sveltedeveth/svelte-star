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
export type GiLightningShieldProps = typeof __propDef.props;
export type GiLightningShieldEvents = typeof __propDef.events;
export type GiLightningShieldSlots = typeof __propDef.slots;
export default class GiLightningShield extends SvelteComponentTyped<GiLightningShieldProps, GiLightningShieldEvents, GiLightningShieldSlots> {
}
export {};
