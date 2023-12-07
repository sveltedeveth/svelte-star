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
export type FaStripeProps = typeof __propDef.props;
export type FaStripeEvents = typeof __propDef.events;
export type FaStripeSlots = typeof __propDef.slots;
export default class FaStripe extends SvelteComponentTyped<FaStripeProps, FaStripeEvents, FaStripeSlots> {
}
export {};
