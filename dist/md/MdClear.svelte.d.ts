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
export type MdClearProps = typeof __propDef.props;
export type MdClearEvents = typeof __propDef.events;
export type MdClearSlots = typeof __propDef.slots;
export default class MdClear extends SvelteComponentTyped<MdClearProps, MdClearEvents, MdClearSlots> {
}
export {};
