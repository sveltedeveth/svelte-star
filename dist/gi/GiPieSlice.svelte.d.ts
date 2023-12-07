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
export type GiPieSliceProps = typeof __propDef.props;
export type GiPieSliceEvents = typeof __propDef.events;
export type GiPieSliceSlots = typeof __propDef.slots;
export default class GiPieSlice extends SvelteComponentTyped<GiPieSliceProps, GiPieSliceEvents, GiPieSliceSlots> {
}
export {};
