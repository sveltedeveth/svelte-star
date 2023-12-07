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
export type GiMoleculeProps = typeof __propDef.props;
export type GiMoleculeEvents = typeof __propDef.events;
export type GiMoleculeSlots = typeof __propDef.slots;
export default class GiMolecule extends SvelteComponentTyped<GiMoleculeProps, GiMoleculeEvents, GiMoleculeSlots> {
}
export {};
