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
export type GiChecklistProps = typeof __propDef.props;
export type GiChecklistEvents = typeof __propDef.events;
export type GiChecklistSlots = typeof __propDef.slots;
export default class GiChecklist extends SvelteComponentTyped<GiChecklistProps, GiChecklistEvents, GiChecklistSlots> {
}
export {};
