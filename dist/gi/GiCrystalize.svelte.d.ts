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
export type GiCrystalizeProps = typeof __propDef.props;
export type GiCrystalizeEvents = typeof __propDef.events;
export type GiCrystalizeSlots = typeof __propDef.slots;
export default class GiCrystalize extends SvelteComponentTyped<GiCrystalizeProps, GiCrystalizeEvents, GiCrystalizeSlots> {
}
export {};
