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
export type FaBufferProps = typeof __propDef.props;
export type FaBufferEvents = typeof __propDef.events;
export type FaBufferSlots = typeof __propDef.slots;
export default class FaBuffer extends SvelteComponentTyped<FaBufferProps, FaBufferEvents, FaBufferSlots> {
}
export {};
