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
export type GiCoffeeMugProps = typeof __propDef.props;
export type GiCoffeeMugEvents = typeof __propDef.events;
export type GiCoffeeMugSlots = typeof __propDef.slots;
export default class GiCoffeeMug extends SvelteComponentTyped<GiCoffeeMugProps, GiCoffeeMugEvents, GiCoffeeMugSlots> {
}
export {};
