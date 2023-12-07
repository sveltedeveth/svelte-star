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
export type TiClipboardProps = typeof __propDef.props;
export type TiClipboardEvents = typeof __propDef.events;
export type TiClipboardSlots = typeof __propDef.slots;
export default class TiClipboard extends SvelteComponentTyped<TiClipboardProps, TiClipboardEvents, TiClipboardSlots> {
}
export {};
