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
export type GiCrownCoinProps = typeof __propDef.props;
export type GiCrownCoinEvents = typeof __propDef.events;
export type GiCrownCoinSlots = typeof __propDef.slots;
export default class GiCrownCoin extends SvelteComponentTyped<GiCrownCoinProps, GiCrownCoinEvents, GiCrownCoinSlots> {
}
export {};
