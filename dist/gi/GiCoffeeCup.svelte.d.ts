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
export type GiCoffeeCupProps = typeof __propDef.props;
export type GiCoffeeCupEvents = typeof __propDef.events;
export type GiCoffeeCupSlots = typeof __propDef.slots;
export default class GiCoffeeCup extends SvelteComponentTyped<GiCoffeeCupProps, GiCoffeeCupEvents, GiCoffeeCupSlots> {
}
export {};
