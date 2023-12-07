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
export type MdQueueProps = typeof __propDef.props;
export type MdQueueEvents = typeof __propDef.events;
export type MdQueueSlots = typeof __propDef.slots;
export default class MdQueue extends SvelteComponentTyped<MdQueueProps, MdQueueEvents, MdQueueSlots> {
}
export {};
