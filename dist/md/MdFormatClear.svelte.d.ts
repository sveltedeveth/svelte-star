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
export type MdFormatClearProps = typeof __propDef.props;
export type MdFormatClearEvents = typeof __propDef.events;
export type MdFormatClearSlots = typeof __propDef.slots;
export default class MdFormatClear extends SvelteComponentTyped<MdFormatClearProps, MdFormatClearEvents, MdFormatClearSlots> {
}
export {};
