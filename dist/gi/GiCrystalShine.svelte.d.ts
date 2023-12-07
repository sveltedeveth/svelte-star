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
export type GiCrystalShineProps = typeof __propDef.props;
export type GiCrystalShineEvents = typeof __propDef.events;
export type GiCrystalShineSlots = typeof __propDef.slots;
export default class GiCrystalShine extends SvelteComponentTyped<GiCrystalShineProps, GiCrystalShineEvents, GiCrystalShineSlots> {
}
export {};
