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
export type GiTradeProps = typeof __propDef.props;
export type GiTradeEvents = typeof __propDef.events;
export type GiTradeSlots = typeof __propDef.slots;
export default class GiTrade extends SvelteComponentTyped<GiTradeProps, GiTradeEvents, GiTradeSlots> {
}
export {};
