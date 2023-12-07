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
export type GiProfitProps = typeof __propDef.props;
export type GiProfitEvents = typeof __propDef.events;
export type GiProfitSlots = typeof __propDef.slots;
export default class GiProfit extends SvelteComponentTyped<GiProfitProps, GiProfitEvents, GiProfitSlots> {
}
export {};
