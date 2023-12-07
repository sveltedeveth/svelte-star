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
export type IoIosClipboardProps = typeof __propDef.props;
export type IoIosClipboardEvents = typeof __propDef.events;
export type IoIosClipboardSlots = typeof __propDef.slots;
export default class IoIosClipboard extends SvelteComponentTyped<IoIosClipboardProps, IoIosClipboardEvents, IoIosClipboardSlots> {
}
export {};
