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
export type GiBowTieProps = typeof __propDef.props;
export type GiBowTieEvents = typeof __propDef.events;
export type GiBowTieSlots = typeof __propDef.slots;
export default class GiBowTie extends SvelteComponentTyped<GiBowTieProps, GiBowTieEvents, GiBowTieSlots> {
}
export {};
