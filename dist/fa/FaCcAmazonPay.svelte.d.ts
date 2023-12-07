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
export type FaCcAmazonPayProps = typeof __propDef.props;
export type FaCcAmazonPayEvents = typeof __propDef.events;
export type FaCcAmazonPaySlots = typeof __propDef.slots;
export default class FaCcAmazonPay extends SvelteComponentTyped<FaCcAmazonPayProps, FaCcAmazonPayEvents, FaCcAmazonPaySlots> {
}
export {};
