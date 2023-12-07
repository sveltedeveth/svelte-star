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
export type FaBreadSliceProps = typeof __propDef.props;
export type FaBreadSliceEvents = typeof __propDef.events;
export type FaBreadSliceSlots = typeof __propDef.slots;
export default class FaBreadSlice extends SvelteComponentTyped<FaBreadSliceProps, FaBreadSliceEvents, FaBreadSliceSlots> {
}
export {};
