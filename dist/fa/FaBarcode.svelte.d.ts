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
export type FaBarcodeProps = typeof __propDef.props;
export type FaBarcodeEvents = typeof __propDef.events;
export type FaBarcodeSlots = typeof __propDef.slots;
export default class FaBarcode extends SvelteComponentTyped<FaBarcodeProps, FaBarcodeEvents, FaBarcodeSlots> {
}
export {};
