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
export type GiCashProps = typeof __propDef.props;
export type GiCashEvents = typeof __propDef.events;
export type GiCashSlots = typeof __propDef.slots;
export default class GiCash extends SvelteComponentTyped<GiCashProps, GiCashEvents, GiCashSlots> {
}
export {};
