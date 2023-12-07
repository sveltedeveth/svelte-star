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
export type GoChecklistProps = typeof __propDef.props;
export type GoChecklistEvents = typeof __propDef.events;
export type GoChecklistSlots = typeof __propDef.slots;
export default class GoChecklist extends SvelteComponentTyped<GoChecklistProps, GoChecklistEvents, GoChecklistSlots> {
}
export {};
