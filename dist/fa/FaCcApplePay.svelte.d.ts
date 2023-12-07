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
export type FaCcApplePayProps = typeof __propDef.props;
export type FaCcApplePayEvents = typeof __propDef.events;
export type FaCcApplePaySlots = typeof __propDef.slots;
export default class FaCcApplePay extends SvelteComponentTyped<FaCcApplePayProps, FaCcApplePayEvents, FaCcApplePaySlots> {
}
export {};
