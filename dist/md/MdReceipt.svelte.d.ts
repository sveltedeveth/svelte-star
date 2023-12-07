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
export type MdReceiptProps = typeof __propDef.props;
export type MdReceiptEvents = typeof __propDef.events;
export type MdReceiptSlots = typeof __propDef.slots;
export default class MdReceipt extends SvelteComponentTyped<MdReceiptProps, MdReceiptEvents, MdReceiptSlots> {
}
export {};
