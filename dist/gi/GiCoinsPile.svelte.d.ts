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
export type GiCoinsPileProps = typeof __propDef.props;
export type GiCoinsPileEvents = typeof __propDef.events;
export type GiCoinsPileSlots = typeof __propDef.slots;
export default class GiCoinsPile extends SvelteComponentTyped<GiCoinsPileProps, GiCoinsPileEvents, GiCoinsPileSlots> {
}
export {};
