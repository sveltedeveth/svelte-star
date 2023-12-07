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
export type GiSpiralArrowProps = typeof __propDef.props;
export type GiSpiralArrowEvents = typeof __propDef.events;
export type GiSpiralArrowSlots = typeof __propDef.slots;
export default class GiSpiralArrow extends SvelteComponentTyped<GiSpiralArrowProps, GiSpiralArrowEvents, GiSpiralArrowSlots> {
}
export {};
