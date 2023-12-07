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
export type GiChemicalBoltProps = typeof __propDef.props;
export type GiChemicalBoltEvents = typeof __propDef.events;
export type GiChemicalBoltSlots = typeof __propDef.slots;
export default class GiChemicalBolt extends SvelteComponentTyped<GiChemicalBoltProps, GiChemicalBoltEvents, GiChemicalBoltSlots> {
}
export {};
