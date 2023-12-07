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
export type FaWalletProps = typeof __propDef.props;
export type FaWalletEvents = typeof __propDef.events;
export type FaWalletSlots = typeof __propDef.slots;
export default class FaWallet extends SvelteComponentTyped<FaWalletProps, FaWalletEvents, FaWalletSlots> {
}
export {};
