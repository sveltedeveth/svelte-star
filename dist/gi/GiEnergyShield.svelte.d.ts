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
export type GiEnergyShieldProps = typeof __propDef.props;
export type GiEnergyShieldEvents = typeof __propDef.events;
export type GiEnergyShieldSlots = typeof __propDef.slots;
export default class GiEnergyShield extends SvelteComponentTyped<GiEnergyShieldProps, GiEnergyShieldEvents, GiEnergyShieldSlots> {
}
export {};
