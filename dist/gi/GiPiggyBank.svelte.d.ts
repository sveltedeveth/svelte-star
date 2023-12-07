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
export type GiPiggyBankProps = typeof __propDef.props;
export type GiPiggyBankEvents = typeof __propDef.events;
export type GiPiggyBankSlots = typeof __propDef.slots;
export default class GiPiggyBank extends SvelteComponentTyped<GiPiggyBankProps, GiPiggyBankEvents, GiPiggyBankSlots> {
}
export {};
