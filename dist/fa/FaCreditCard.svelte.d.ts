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
export type FaCreditCardProps = typeof __propDef.props;
export type FaCreditCardEvents = typeof __propDef.events;
export type FaCreditCardSlots = typeof __propDef.slots;
export default class FaCreditCard extends SvelteComponentTyped<FaCreditCardProps, FaCreditCardEvents, FaCreditCardSlots> {
}
export {};
