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
export type IoMdNutritionProps = typeof __propDef.props;
export type IoMdNutritionEvents = typeof __propDef.events;
export type IoMdNutritionSlots = typeof __propDef.slots;
export default class IoMdNutrition extends SvelteComponentTyped<IoMdNutritionProps, IoMdNutritionEvents, IoMdNutritionSlots> {
}
export {};
