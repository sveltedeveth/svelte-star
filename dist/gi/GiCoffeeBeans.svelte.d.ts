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
export type GiCoffeeBeansProps = typeof __propDef.props;
export type GiCoffeeBeansEvents = typeof __propDef.events;
export type GiCoffeeBeansSlots = typeof __propDef.slots;
export default class GiCoffeeBeans extends SvelteComponentTyped<GiCoffeeBeansProps, GiCoffeeBeansEvents, GiCoffeeBeansSlots> {
}
export {};
