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
export type GiCrystalBarsProps = typeof __propDef.props;
export type GiCrystalBarsEvents = typeof __propDef.events;
export type GiCrystalBarsSlots = typeof __propDef.slots;
export default class GiCrystalBars extends SvelteComponentTyped<GiCrystalBarsProps, GiCrystalBarsEvents, GiCrystalBarsSlots> {
}
export {};
