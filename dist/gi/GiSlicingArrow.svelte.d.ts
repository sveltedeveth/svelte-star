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
export type GiSlicingArrowProps = typeof __propDef.props;
export type GiSlicingArrowEvents = typeof __propDef.events;
export type GiSlicingArrowSlots = typeof __propDef.slots;
export default class GiSlicingArrow extends SvelteComponentTyped<GiSlicingArrowProps, GiSlicingArrowEvents, GiSlicingArrowSlots> {
}
export {};
