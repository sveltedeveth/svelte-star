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
export type FaFlushedProps = typeof __propDef.props;
export type FaFlushedEvents = typeof __propDef.events;
export type FaFlushedSlots = typeof __propDef.slots;
export default class FaFlushed extends SvelteComponentTyped<FaFlushedProps, FaFlushedEvents, FaFlushedSlots> {
}
export {};
