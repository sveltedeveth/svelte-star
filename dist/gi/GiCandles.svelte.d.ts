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
export type GiCandlesProps = typeof __propDef.props;
export type GiCandlesEvents = typeof __propDef.events;
export type GiCandlesSlots = typeof __propDef.slots;
export default class GiCandles extends SvelteComponentTyped<GiCandlesProps, GiCandlesEvents, GiCandlesSlots> {
}
export {};
