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
export type FaReceiptProps = typeof __propDef.props;
export type FaReceiptEvents = typeof __propDef.events;
export type FaReceiptSlots = typeof __propDef.slots;
export default class FaReceipt extends SvelteComponentTyped<FaReceiptProps, FaReceiptEvents, FaReceiptSlots> {
}
export {};
