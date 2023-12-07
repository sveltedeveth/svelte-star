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
export type FaCocktailProps = typeof __propDef.props;
export type FaCocktailEvents = typeof __propDef.events;
export type FaCocktailSlots = typeof __propDef.slots;
export default class FaCocktail extends SvelteComponentTyped<FaCocktailProps, FaCocktailEvents, FaCocktailSlots> {
}
export {};
