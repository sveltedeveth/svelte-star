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
export type FaPawProps = typeof __propDef.props;
export type FaPawEvents = typeof __propDef.events;
export type FaPawSlots = typeof __propDef.slots;
export default class FaPaw extends SvelteComponentTyped<FaPawProps, FaPawEvents, FaPawSlots> {
}
export {};
