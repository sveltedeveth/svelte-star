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
export type FaClipboardListProps = typeof __propDef.props;
export type FaClipboardListEvents = typeof __propDef.events;
export type FaClipboardListSlots = typeof __propDef.slots;
export default class FaClipboardList extends SvelteComponentTyped<FaClipboardListProps, FaClipboardListEvents, FaClipboardListSlots> {
}
export {};
