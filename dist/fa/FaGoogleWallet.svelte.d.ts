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
export type FaGoogleWalletProps = typeof __propDef.props;
export type FaGoogleWalletEvents = typeof __propDef.events;
export type FaGoogleWalletSlots = typeof __propDef.slots;
export default class FaGoogleWallet extends SvelteComponentTyped<FaGoogleWalletProps, FaGoogleWalletEvents, FaGoogleWalletSlots> {
}
export {};
