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
export type GiCandleHolderProps = typeof __propDef.props;
export type GiCandleHolderEvents = typeof __propDef.events;
export type GiCandleHolderSlots = typeof __propDef.slots;
export default class GiCandleHolder extends SvelteComponentTyped<GiCandleHolderProps, GiCandleHolderEvents, GiCandleHolderSlots> {
}
export {};
