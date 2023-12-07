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
export type FaNutritionixProps = typeof __propDef.props;
export type FaNutritionixEvents = typeof __propDef.events;
export type FaNutritionixSlots = typeof __propDef.slots;
export default class FaNutritionix extends SvelteComponentTyped<FaNutritionixProps, FaNutritionixEvents, FaNutritionixSlots> {
}
export {};
