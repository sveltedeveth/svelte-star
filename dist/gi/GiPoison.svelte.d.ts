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
export type GiPoisonProps = typeof __propDef.props;
export type GiPoisonEvents = typeof __propDef.events;
export type GiPoisonSlots = typeof __propDef.slots;
export default class GiPoison extends SvelteComponentTyped<GiPoisonProps, GiPoisonEvents, GiPoisonSlots> {
}
export {};
