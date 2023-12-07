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
export type MdPrintProps = typeof __propDef.props;
export type MdPrintEvents = typeof __propDef.events;
export type MdPrintSlots = typeof __propDef.slots;
export default class MdPrint extends SvelteComponentTyped<MdPrintProps, MdPrintEvents, MdPrintSlots> {
}
export {};
