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
export type GiWindowBarsProps = typeof __propDef.props;
export type GiWindowBarsEvents = typeof __propDef.events;
export type GiWindowBarsSlots = typeof __propDef.slots;
export default class GiWindowBars extends SvelteComponentTyped<GiWindowBarsProps, GiWindowBarsEvents, GiWindowBarsSlots> {
}
export {};
