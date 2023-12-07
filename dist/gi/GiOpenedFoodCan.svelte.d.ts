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
export type GiOpenedFoodCanProps = typeof __propDef.props;
export type GiOpenedFoodCanEvents = typeof __propDef.events;
export type GiOpenedFoodCanSlots = typeof __propDef.slots;
export default class GiOpenedFoodCan extends SvelteComponentTyped<GiOpenedFoodCanProps, GiOpenedFoodCanEvents, GiOpenedFoodCanSlots> {
}
export {};
