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
export type FaToggleOffProps = typeof __propDef.props;
export type FaToggleOffEvents = typeof __propDef.events;
export type FaToggleOffSlots = typeof __propDef.slots;
export default class FaToggleOff extends SvelteComponentTyped<FaToggleOffProps, FaToggleOffEvents, FaToggleOffSlots> {
}
export {};
