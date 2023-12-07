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
export type MdAssignmentIndProps = typeof __propDef.props;
export type MdAssignmentIndEvents = typeof __propDef.events;
export type MdAssignmentIndSlots = typeof __propDef.slots;
export default class MdAssignmentInd extends SvelteComponentTyped<MdAssignmentIndProps, MdAssignmentIndEvents, MdAssignmentIndSlots> {
}
export {};
