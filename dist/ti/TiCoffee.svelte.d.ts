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
export type TiCoffeeProps = typeof __propDef.props;
export type TiCoffeeEvents = typeof __propDef.events;
export type TiCoffeeSlots = typeof __propDef.slots;
export default class TiCoffee extends SvelteComponentTyped<TiCoffeeProps, TiCoffeeEvents, TiCoffeeSlots> {
}
export {};
