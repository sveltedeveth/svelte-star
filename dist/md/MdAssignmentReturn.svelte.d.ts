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
export type MdAssignmentReturnProps = typeof __propDef.props;
export type MdAssignmentReturnEvents = typeof __propDef.events;
export type MdAssignmentReturnSlots = typeof __propDef.slots;
export default class MdAssignmentReturn extends SvelteComponentTyped<MdAssignmentReturnProps, MdAssignmentReturnEvents, MdAssignmentReturnSlots> {
}
export {};
