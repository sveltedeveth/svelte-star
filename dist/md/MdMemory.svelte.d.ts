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
export type MdMemoryProps = typeof __propDef.props;
export type MdMemoryEvents = typeof __propDef.events;
export type MdMemorySlots = typeof __propDef.slots;
export default class MdMemory extends SvelteComponentTyped<MdMemoryProps, MdMemoryEvents, MdMemorySlots> {
}
export {};
