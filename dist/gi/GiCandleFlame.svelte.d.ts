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
export type GiCandleFlameProps = typeof __propDef.props;
export type GiCandleFlameEvents = typeof __propDef.events;
export type GiCandleFlameSlots = typeof __propDef.slots;
export default class GiCandleFlame extends SvelteComponentTyped<GiCandleFlameProps, GiCandleFlameEvents, GiCandleFlameSlots> {
}
export {};
