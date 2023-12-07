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
export type FaClipboardCheckProps = typeof __propDef.props;
export type FaClipboardCheckEvents = typeof __propDef.events;
export type FaClipboardCheckSlots = typeof __propDef.slots;
export default class FaClipboardCheck extends SvelteComponentTyped<FaClipboardCheckProps, FaClipboardCheckEvents, FaClipboardCheckSlots> {
}
export {};
