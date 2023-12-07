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
export type GoListOrderedProps = typeof __propDef.props;
export type GoListOrderedEvents = typeof __propDef.events;
export type GoListOrderedSlots = typeof __propDef.slots;
export default class GoListOrdered extends SvelteComponentTyped<GoListOrderedProps, GoListOrderedEvents, GoListOrderedSlots> {
}
export {};
