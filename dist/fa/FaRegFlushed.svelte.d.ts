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
export type FaRegFlushedProps = typeof __propDef.props;
export type FaRegFlushedEvents = typeof __propDef.events;
export type FaRegFlushedSlots = typeof __propDef.slots;
export default class FaRegFlushed extends SvelteComponentTyped<FaRegFlushedProps, FaRegFlushedEvents, FaRegFlushedSlots> {
}
export {};
