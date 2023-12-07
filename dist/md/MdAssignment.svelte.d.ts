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
export type MdAssignmentProps = typeof __propDef.props;
export type MdAssignmentEvents = typeof __propDef.events;
export type MdAssignmentSlots = typeof __propDef.slots;
export default class MdAssignment extends SvelteComponentTyped<MdAssignmentProps, MdAssignmentEvents, MdAssignmentSlots> {
}
export {};
