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
export type FaPiggyBankProps = typeof __propDef.props;
export type FaPiggyBankEvents = typeof __propDef.events;
export type FaPiggyBankSlots = typeof __propDef.slots;
export default class FaPiggyBank extends SvelteComponentTyped<FaPiggyBankProps, FaPiggyBankEvents, FaPiggyBankSlots> {
}
export {};
