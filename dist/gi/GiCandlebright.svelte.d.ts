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
export type GiCandlebrightProps = typeof __propDef.props;
export type GiCandlebrightEvents = typeof __propDef.events;
export type GiCandlebrightSlots = typeof __propDef.slots;
export default class GiCandlebright extends SvelteComponentTyped<GiCandlebrightProps, GiCandlebrightEvents, GiCandlebrightSlots> {
}
export {};
