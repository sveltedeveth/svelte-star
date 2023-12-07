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
export type GiSpiralBottleProps = typeof __propDef.props;
export type GiSpiralBottleEvents = typeof __propDef.events;
export type GiSpiralBottleSlots = typeof __propDef.slots;
export default class GiSpiralBottle extends SvelteComponentTyped<GiSpiralBottleProps, GiSpiralBottleEvents, GiSpiralBottleSlots> {
}
export {};
