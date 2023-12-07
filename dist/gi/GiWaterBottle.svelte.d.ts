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
export type GiWaterBottleProps = typeof __propDef.props;
export type GiWaterBottleEvents = typeof __propDef.events;
export type GiWaterBottleSlots = typeof __propDef.slots;
export default class GiWaterBottle extends SvelteComponentTyped<GiWaterBottleProps, GiWaterBottleEvents, GiWaterBottleSlots> {
}
export {};
