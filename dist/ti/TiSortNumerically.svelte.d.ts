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
export type TiSortNumericallyProps = typeof __propDef.props;
export type TiSortNumericallyEvents = typeof __propDef.events;
export type TiSortNumericallySlots = typeof __propDef.slots;
export default class TiSortNumerically extends SvelteComponentTyped<TiSortNumericallyProps, TiSortNumericallyEvents, TiSortNumericallySlots> {
}
export {};
