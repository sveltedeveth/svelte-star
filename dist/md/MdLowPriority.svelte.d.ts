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
export type MdLowPriorityProps = typeof __propDef.props;
export type MdLowPriorityEvents = typeof __propDef.events;
export type MdLowPrioritySlots = typeof __propDef.slots;
export default class MdLowPriority extends SvelteComponentTyped<MdLowPriorityProps, MdLowPriorityEvents, MdLowPrioritySlots> {
}
export {};
