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
export type MdDeleteSweepProps = typeof __propDef.props;
export type MdDeleteSweepEvents = typeof __propDef.events;
export type MdDeleteSweepSlots = typeof __propDef.slots;
export default class MdDeleteSweep extends SvelteComponentTyped<MdDeleteSweepProps, MdDeleteSweepEvents, MdDeleteSweepSlots> {
}
export {};
