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
export type MdAccountBalanceProps = typeof __propDef.props;
export type MdAccountBalanceEvents = typeof __propDef.events;
export type MdAccountBalanceSlots = typeof __propDef.slots;
export default class MdAccountBalance extends SvelteComponentTyped<MdAccountBalanceProps, MdAccountBalanceEvents, MdAccountBalanceSlots> {
}
export {};
