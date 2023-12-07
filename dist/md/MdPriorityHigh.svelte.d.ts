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
export type MdPriorityHighProps = typeof __propDef.props;
export type MdPriorityHighEvents = typeof __propDef.events;
export type MdPriorityHighSlots = typeof __propDef.slots;
export default class MdPriorityHigh extends SvelteComponentTyped<MdPriorityHighProps, MdPriorityHighEvents, MdPriorityHighSlots> {
}
export {};
