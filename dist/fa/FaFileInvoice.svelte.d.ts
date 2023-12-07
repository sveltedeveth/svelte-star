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
export type FaFileInvoiceProps = typeof __propDef.props;
export type FaFileInvoiceEvents = typeof __propDef.events;
export type FaFileInvoiceSlots = typeof __propDef.slots;
export default class FaFileInvoice extends SvelteComponentTyped<FaFileInvoiceProps, FaFileInvoiceEvents, FaFileInvoiceSlots> {
}
export {};
