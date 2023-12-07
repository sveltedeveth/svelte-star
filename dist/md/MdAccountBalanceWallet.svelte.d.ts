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
export type MdAccountBalanceWalletProps = typeof __propDef.props;
export type MdAccountBalanceWalletEvents = typeof __propDef.events;
export type MdAccountBalanceWalletSlots = typeof __propDef.slots;
export default class MdAccountBalanceWallet extends SvelteComponentTyped<MdAccountBalanceWalletProps, MdAccountBalanceWalletEvents, MdAccountBalanceWalletSlots> {
}
export {};
