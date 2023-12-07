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
export type FaTasksProps = typeof __propDef.props;
export type FaTasksEvents = typeof __propDef.events;
export type FaTasksSlots = typeof __propDef.slots;
export default class FaTasks extends SvelteComponentTyped<FaTasksProps, FaTasksEvents, FaTasksSlots> {
}
export {};
