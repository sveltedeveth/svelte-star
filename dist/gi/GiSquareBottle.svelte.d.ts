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
export type GiSquareBottleProps = typeof __propDef.props;
export type GiSquareBottleEvents = typeof __propDef.events;
export type GiSquareBottleSlots = typeof __propDef.slots;
export default class GiSquareBottle extends SvelteComponentTyped<GiSquareBottleProps, GiSquareBottleEvents, GiSquareBottleSlots> {
}
export {};
