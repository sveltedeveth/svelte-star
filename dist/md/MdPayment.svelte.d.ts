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
export type MdPaymentProps = typeof __propDef.props;
export type MdPaymentEvents = typeof __propDef.events;
export type MdPaymentSlots = typeof __propDef.slots;
export default class MdPayment extends SvelteComponentTyped<MdPaymentProps, MdPaymentEvents, MdPaymentSlots> {
}
export {};
