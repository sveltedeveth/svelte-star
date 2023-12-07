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
export type IoMdBarcodeProps = typeof __propDef.props;
export type IoMdBarcodeEvents = typeof __propDef.events;
export type IoMdBarcodeSlots = typeof __propDef.slots;
export default class IoMdBarcode extends SvelteComponentTyped<IoMdBarcodeProps, IoMdBarcodeEvents, IoMdBarcodeSlots> {
}
export {};
