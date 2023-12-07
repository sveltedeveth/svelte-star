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
export type GiCrystalShrineProps = typeof __propDef.props;
export type GiCrystalShrineEvents = typeof __propDef.events;
export type GiCrystalShrineSlots = typeof __propDef.slots;
export default class GiCrystalShrine extends SvelteComponentTyped<GiCrystalShrineProps, GiCrystalShrineEvents, GiCrystalShrineSlots> {
}
export {};
