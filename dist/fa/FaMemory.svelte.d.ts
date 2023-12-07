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
export type FaMemoryProps = typeof __propDef.props;
export type FaMemoryEvents = typeof __propDef.events;
export type FaMemorySlots = typeof __propDef.slots;
export default class FaMemory extends SvelteComponentTyped<FaMemoryProps, FaMemoryEvents, FaMemorySlots> {
}
export {};
