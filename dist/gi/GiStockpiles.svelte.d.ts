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
export type GiStockpilesProps = typeof __propDef.props;
export type GiStockpilesEvents = typeof __propDef.events;
export type GiStockpilesSlots = typeof __propDef.slots;
export default class GiStockpiles extends SvelteComponentTyped<GiStockpilesProps, GiStockpilesEvents, GiStockpilesSlots> {
}
export {};
