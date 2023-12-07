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
export type MdAssignmentReturnedProps = typeof __propDef.props;
export type MdAssignmentReturnedEvents = typeof __propDef.events;
export type MdAssignmentReturnedSlots = typeof __propDef.slots;
export default class MdAssignmentReturned extends SvelteComponentTyped<MdAssignmentReturnedProps, MdAssignmentReturnedEvents, MdAssignmentReturnedSlots> {
}
export {};
