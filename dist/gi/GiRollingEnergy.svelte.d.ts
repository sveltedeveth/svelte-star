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
export type GiRollingEnergyProps = typeof __propDef.props;
export type GiRollingEnergyEvents = typeof __propDef.events;
export type GiRollingEnergySlots = typeof __propDef.slots;
export default class GiRollingEnergy extends SvelteComponentTyped<GiRollingEnergyProps, GiRollingEnergyEvents, GiRollingEnergySlots> {
}
export {};
