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
export type GiCarrionProps = typeof __propDef.props;
export type GiCarrionEvents = typeof __propDef.events;
export type GiCarrionSlots = typeof __propDef.slots;
export default class GiCarrion extends SvelteComponentTyped<GiCarrionProps, GiCarrionEvents, GiCarrionSlots> {
}
export {};
