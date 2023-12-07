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
export type TiCreditCardProps = typeof __propDef.props;
export type TiCreditCardEvents = typeof __propDef.events;
export type TiCreditCardSlots = typeof __propDef.slots;
export default class TiCreditCard extends SvelteComponentTyped<TiCreditCardProps, TiCreditCardEvents, TiCreditCardSlots> {
}
export {};
