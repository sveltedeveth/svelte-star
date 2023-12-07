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
export type GiLowTideProps = typeof __propDef.props;
export type GiLowTideEvents = typeof __propDef.events;
export type GiLowTideSlots = typeof __propDef.slots;
export default class GiLowTide extends SvelteComponentTyped<GiLowTideProps, GiLowTideEvents, GiLowTideSlots> {
}
export {};
