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
export type GiWoodCabinProps = typeof __propDef.props;
export type GiWoodCabinEvents = typeof __propDef.events;
export type GiWoodCabinSlots = typeof __propDef.slots;
export default class GiWoodCabin extends SvelteComponentTyped<GiWoodCabinProps, GiWoodCabinEvents, GiWoodCabinSlots> {
}
export {};
