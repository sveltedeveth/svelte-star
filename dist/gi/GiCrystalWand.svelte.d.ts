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
export type GiCrystalWandProps = typeof __propDef.props;
export type GiCrystalWandEvents = typeof __propDef.events;
export type GiCrystalWandSlots = typeof __propDef.slots;
export default class GiCrystalWand extends SvelteComponentTyped<GiCrystalWandProps, GiCrystalWandEvents, GiCrystalWandSlots> {
}
export {};
