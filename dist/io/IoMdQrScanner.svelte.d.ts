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
export type IoMdQrScannerProps = typeof __propDef.props;
export type IoMdQrScannerEvents = typeof __propDef.events;
export type IoMdQrScannerSlots = typeof __propDef.slots;
export default class IoMdQrScanner extends SvelteComponentTyped<IoMdQrScannerProps, IoMdQrScannerEvents, IoMdQrScannerSlots> {
}
export {};
