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
export type GiWalletProps = typeof __propDef.props;
export type GiWalletEvents = typeof __propDef.events;
export type GiWalletSlots = typeof __propDef.slots;
export default class GiWallet extends SvelteComponentTyped<GiWalletProps, GiWalletEvents, GiWalletSlots> {
}
export {};
