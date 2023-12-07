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
export type GiChemicalTankProps = typeof __propDef.props;
export type GiChemicalTankEvents = typeof __propDef.events;
export type GiChemicalTankSlots = typeof __propDef.slots;
export default class GiChemicalTank extends SvelteComponentTyped<GiChemicalTankProps, GiChemicalTankEvents, GiChemicalTankSlots> {
}
export {};
