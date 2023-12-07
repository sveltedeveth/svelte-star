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
export type MdScannerProps = typeof __propDef.props;
export type MdScannerEvents = typeof __propDef.events;
export type MdScannerSlots = typeof __propDef.slots;
export default class MdScanner extends SvelteComponentTyped<MdScannerProps, MdScannerEvents, MdScannerSlots> {
}
export {};
