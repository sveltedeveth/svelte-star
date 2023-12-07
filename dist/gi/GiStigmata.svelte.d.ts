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
export type GiStigmataProps = typeof __propDef.props;
export type GiStigmataEvents = typeof __propDef.events;
export type GiStigmataSlots = typeof __propDef.slots;
export default class GiStigmata extends SvelteComponentTyped<GiStigmataProps, GiStigmataEvents, GiStigmataSlots> {
}
export {};
