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
export type FaClipboardProps = typeof __propDef.props;
export type FaClipboardEvents = typeof __propDef.events;
export type FaClipboardSlots = typeof __propDef.slots;
export default class FaClipboard extends SvelteComponentTyped<FaClipboardProps, FaClipboardEvents, FaClipboardSlots> {
}
export {};
