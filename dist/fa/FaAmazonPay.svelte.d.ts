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
export type FaAmazonPayProps = typeof __propDef.props;
export type FaAmazonPayEvents = typeof __propDef.events;
export type FaAmazonPaySlots = typeof __propDef.slots;
export default class FaAmazonPay extends SvelteComponentTyped<FaAmazonPayProps, FaAmazonPayEvents, FaAmazonPaySlots> {
}
export {};
