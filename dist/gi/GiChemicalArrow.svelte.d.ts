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
export type GiChemicalArrowProps = typeof __propDef.props;
export type GiChemicalArrowEvents = typeof __propDef.events;
export type GiChemicalArrowSlots = typeof __propDef.slots;
export default class GiChemicalArrow extends SvelteComponentTyped<GiChemicalArrowProps, GiChemicalArrowEvents, GiChemicalArrowSlots> {
}
export {};
