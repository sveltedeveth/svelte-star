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
export type GiMealProps = typeof __propDef.props;
export type GiMealEvents = typeof __propDef.events;
export type GiMealSlots = typeof __propDef.slots;
export default class GiMeal extends SvelteComponentTyped<GiMealProps, GiMealEvents, GiMealSlots> {
}
export {};
