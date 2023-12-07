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
export type GiCzSkorpionProps = typeof __propDef.props;
export type GiCzSkorpionEvents = typeof __propDef.events;
export type GiCzSkorpionSlots = typeof __propDef.slots;
export default class GiCzSkorpion extends SvelteComponentTyped<GiCzSkorpionProps, GiCzSkorpionEvents, GiCzSkorpionSlots> {
}
export {};
