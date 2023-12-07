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
export type FaPalletProps = typeof __propDef.props;
export type FaPalletEvents = typeof __propDef.events;
export type FaPalletSlots = typeof __propDef.slots;
export default class FaPallet extends SvelteComponentTyped<FaPalletProps, FaPalletEvents, FaPalletSlots> {
}
export {};
