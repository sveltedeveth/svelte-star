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
export type IoMdFingerPrintProps = typeof __propDef.props;
export type IoMdFingerPrintEvents = typeof __propDef.events;
export type IoMdFingerPrintSlots = typeof __propDef.slots;
export default class IoMdFingerPrint extends SvelteComponentTyped<IoMdFingerPrintProps, IoMdFingerPrintEvents, IoMdFingerPrintSlots> {
}
export {};
