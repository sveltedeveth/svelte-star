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
export type FaRegCreditCardProps = typeof __propDef.props;
export type FaRegCreditCardEvents = typeof __propDef.events;
export type FaRegCreditCardSlots = typeof __propDef.slots;
export default class FaRegCreditCard extends SvelteComponentTyped<FaRegCreditCardProps, FaRegCreditCardEvents, FaRegCreditCardSlots> {
}
export {};
