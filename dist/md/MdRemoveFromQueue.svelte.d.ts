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
export type MdRemoveFromQueueProps = typeof __propDef.props;
export type MdRemoveFromQueueEvents = typeof __propDef.events;
export type MdRemoveFromQueueSlots = typeof __propDef.slots;
export default class MdRemoveFromQueue extends SvelteComponentTyped<MdRemoveFromQueueProps, MdRemoveFromQueueEvents, MdRemoveFromQueueSlots> {
}
export {};
