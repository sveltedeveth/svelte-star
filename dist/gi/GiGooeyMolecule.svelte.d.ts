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
export type GiGooeyMoleculeProps = typeof __propDef.props;
export type GiGooeyMoleculeEvents = typeof __propDef.events;
export type GiGooeyMoleculeSlots = typeof __propDef.slots;
export default class GiGooeyMolecule extends SvelteComponentTyped<GiGooeyMoleculeProps, GiGooeyMoleculeEvents, GiGooeyMoleculeSlots> {
}
export {};
