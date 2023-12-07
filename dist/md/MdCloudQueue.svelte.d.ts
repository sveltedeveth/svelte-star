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
export type MdCloudQueueProps = typeof __propDef.props;
export type MdCloudQueueEvents = typeof __propDef.events;
export type MdCloudQueueSlots = typeof __propDef.slots;
export default class MdCloudQueue extends SvelteComponentTyped<MdCloudQueueProps, MdCloudQueueEvents, MdCloudQueueSlots> {
}
export {};
