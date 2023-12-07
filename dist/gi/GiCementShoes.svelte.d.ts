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
export type GiCementShoesProps = typeof __propDef.props;
export type GiCementShoesEvents = typeof __propDef.events;
export type GiCementShoesSlots = typeof __propDef.slots;
export default class GiCementShoes extends SvelteComponentTyped<GiCementShoesProps, GiCementShoesEvents, GiCementShoesSlots> {
}
export {};
