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
export type MdAddToQueueProps = typeof __propDef.props;
export type MdAddToQueueEvents = typeof __propDef.events;
export type MdAddToQueueSlots = typeof __propDef.slots;
export default class MdAddToQueue extends SvelteComponentTyped<MdAddToQueueProps, MdAddToQueueEvents, MdAddToQueueSlots> {
}
export {};
