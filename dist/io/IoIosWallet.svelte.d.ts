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
export type IoIosWalletProps = typeof __propDef.props;
export type IoIosWalletEvents = typeof __propDef.events;
export type IoIosWalletSlots = typeof __propDef.slots;
export default class IoIosWallet extends SvelteComponentTyped<IoIosWalletProps, IoIosWalletEvents, IoIosWalletSlots> {
}
export {};
