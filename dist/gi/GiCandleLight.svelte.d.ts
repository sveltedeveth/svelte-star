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
export type GiCandleLightProps = typeof __propDef.props;
export type GiCandleLightEvents = typeof __propDef.events;
export type GiCandleLightSlots = typeof __propDef.slots;
export default class GiCandleLight extends SvelteComponentTyped<GiCandleLightProps, GiCandleLightEvents, GiCandleLightSlots> {
}
export {};
