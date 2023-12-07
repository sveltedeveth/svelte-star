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
export type GiRadialBalanceProps = typeof __propDef.props;
export type GiRadialBalanceEvents = typeof __propDef.events;
export type GiRadialBalanceSlots = typeof __propDef.slots;
export default class GiRadialBalance extends SvelteComponentTyped<GiRadialBalanceProps, GiRadialBalanceEvents, GiRadialBalanceSlots> {
}
export {};
