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
export type GiCandleSkullProps = typeof __propDef.props;
export type GiCandleSkullEvents = typeof __propDef.events;
export type GiCandleSkullSlots = typeof __propDef.slots;
export default class GiCandleSkull extends SvelteComponentTyped<GiCandleSkullProps, GiCandleSkullEvents, GiCandleSkullSlots> {
}
export {};
