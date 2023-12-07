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
export type FaApplePayProps = typeof __propDef.props;
export type FaApplePayEvents = typeof __propDef.events;
export type FaApplePaySlots = typeof __propDef.slots;
export default class FaApplePay extends SvelteComponentTyped<FaApplePayProps, FaApplePayEvents, FaApplePaySlots> {
}
export {};
