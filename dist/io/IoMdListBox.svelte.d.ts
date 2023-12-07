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
export type IoMdListBoxProps = typeof __propDef.props;
export type IoMdListBoxEvents = typeof __propDef.events;
export type IoMdListBoxSlots = typeof __propDef.slots;
export default class IoMdListBox extends SvelteComponentTyped<IoMdListBoxProps, IoMdListBoxEvents, IoMdListBoxSlots> {
}
export {};
