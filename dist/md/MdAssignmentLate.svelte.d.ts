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
export type MdAssignmentLateProps = typeof __propDef.props;
export type MdAssignmentLateEvents = typeof __propDef.events;
export type MdAssignmentLateSlots = typeof __propDef.slots;
export default class MdAssignmentLate extends SvelteComponentTyped<MdAssignmentLateProps, MdAssignmentLateEvents, MdAssignmentLateSlots> {
}
export {};
