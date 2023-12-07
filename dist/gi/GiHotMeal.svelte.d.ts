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
export type GiHotMealProps = typeof __propDef.props;
export type GiHotMealEvents = typeof __propDef.events;
export type GiHotMealSlots = typeof __propDef.slots;
export default class GiHotMeal extends SvelteComponentTyped<GiHotMealProps, GiHotMealEvents, GiHotMealSlots> {
}
export {};
