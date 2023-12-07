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
export type GiBodyBalanceProps = typeof __propDef.props;
export type GiBodyBalanceEvents = typeof __propDef.events;
export type GiBodyBalanceSlots = typeof __propDef.slots;
export default class GiBodyBalance extends SvelteComponentTyped<GiBodyBalanceProps, GiBodyBalanceEvents, GiBodyBalanceSlots> {
}
export {};
