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
export type IoMdPrintProps = typeof __propDef.props;
export type IoMdPrintEvents = typeof __propDef.events;
export type IoMdPrintSlots = typeof __propDef.slots;
export default class IoMdPrint extends SvelteComponentTyped<IoMdPrintProps, IoMdPrintEvents, IoMdPrintSlots> {
}
export {};
