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
export type GiEnergyBreathProps = typeof __propDef.props;
export type GiEnergyBreathEvents = typeof __propDef.events;
export type GiEnergyBreathSlots = typeof __propDef.slots;
export default class GiEnergyBreath extends SvelteComponentTyped<GiEnergyBreathProps, GiEnergyBreathEvents, GiEnergyBreathSlots> {
}
export {};
