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
export type IoIosBarcodeProps = typeof __propDef.props;
export type IoIosBarcodeEvents = typeof __propDef.events;
export type IoIosBarcodeSlots = typeof __propDef.slots;
export default class IoIosBarcode extends SvelteComponentTyped<IoIosBarcodeProps, IoIosBarcodeEvents, IoIosBarcodeSlots> {
}
export {};
