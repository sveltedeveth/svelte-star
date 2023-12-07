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
export type FaCcStripeProps = typeof __propDef.props;
export type FaCcStripeEvents = typeof __propDef.events;
export type FaCcStripeSlots = typeof __propDef.slots;
export default class FaCcStripe extends SvelteComponentTyped<FaCcStripeProps, FaCcStripeEvents, FaCcStripeSlots> {
}
export {};
