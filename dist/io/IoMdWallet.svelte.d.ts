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
export type IoMdWalletProps = typeof __propDef.props;
export type IoMdWalletEvents = typeof __propDef.events;
export type IoMdWalletSlots = typeof __propDef.slots;
export default class IoMdWallet extends SvelteComponentTyped<IoMdWalletProps, IoMdWalletEvents, IoMdWalletSlots> {
}
export {};
