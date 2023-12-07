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
export type GiChemicalDropProps = typeof __propDef.props;
export type GiChemicalDropEvents = typeof __propDef.events;
export type GiChemicalDropSlots = typeof __propDef.slots;
export default class GiChemicalDrop extends SvelteComponentTyped<GiChemicalDropProps, GiChemicalDropEvents, GiChemicalDropSlots> {
}
export {};
