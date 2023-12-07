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
export type GiCrystalGrowthProps = typeof __propDef.props;
export type GiCrystalGrowthEvents = typeof __propDef.events;
export type GiCrystalGrowthSlots = typeof __propDef.slots;
export default class GiCrystalGrowth extends SvelteComponentTyped<GiCrystalGrowthProps, GiCrystalGrowthEvents, GiCrystalGrowthSlots> {
}
export {};
