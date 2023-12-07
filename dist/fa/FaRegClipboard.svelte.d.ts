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
export type FaRegClipboardProps = typeof __propDef.props;
export type FaRegClipboardEvents = typeof __propDef.events;
export type FaRegClipboardSlots = typeof __propDef.slots;
export default class FaRegClipboard extends SvelteComponentTyped<FaRegClipboardProps, FaRegClipboardEvents, FaRegClipboardSlots> {
}
export {};
