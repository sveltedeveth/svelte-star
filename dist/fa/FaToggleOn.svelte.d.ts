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
export type FaToggleOnProps = typeof __propDef.props;
export type FaToggleOnEvents = typeof __propDef.events;
export type FaToggleOnSlots = typeof __propDef.slots;
export default class FaToggleOn extends SvelteComponentTyped<FaToggleOnProps, FaToggleOnEvents, FaToggleOnSlots> {
}
export {};
