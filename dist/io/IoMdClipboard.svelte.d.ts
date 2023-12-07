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
export type IoMdClipboardProps = typeof __propDef.props;
export type IoMdClipboardEvents = typeof __propDef.events;
export type IoMdClipboardSlots = typeof __propDef.slots;
export default class IoMdClipboard extends SvelteComponentTyped<IoMdClipboardProps, IoMdClipboardEvents, IoMdClipboardSlots> {
}
export {};
