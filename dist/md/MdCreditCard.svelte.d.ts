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
export type MdCreditCardProps = typeof __propDef.props;
export type MdCreditCardEvents = typeof __propDef.events;
export type MdCreditCardSlots = typeof __propDef.slots;
export default class MdCreditCard extends SvelteComponentTyped<MdCreditCardProps, MdCreditCardEvents, MdCreditCardSlots> {
}
export {};
