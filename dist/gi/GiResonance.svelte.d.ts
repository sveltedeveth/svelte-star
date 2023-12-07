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
export type GiResonanceProps = typeof __propDef.props;
export type GiResonanceEvents = typeof __propDef.events;
export type GiResonanceSlots = typeof __propDef.slots;
export default class GiResonance extends SvelteComponentTyped<GiResonanceProps, GiResonanceEvents, GiResonanceSlots> {
}
export {};
