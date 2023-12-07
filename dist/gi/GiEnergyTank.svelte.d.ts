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
export type GiEnergyTankProps = typeof __propDef.props;
export type GiEnergyTankEvents = typeof __propDef.events;
export type GiEnergyTankSlots = typeof __propDef.slots;
export default class GiEnergyTank extends SvelteComponentTyped<GiEnergyTankProps, GiEnergyTankEvents, GiEnergyTankSlots> {
}
export {};
