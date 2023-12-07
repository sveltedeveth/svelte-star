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
export type GoListUnorderedProps = typeof __propDef.props;
export type GoListUnorderedEvents = typeof __propDef.events;
export type GoListUnorderedSlots = typeof __propDef.slots;
export default class GoListUnordered extends SvelteComponentTyped<GoListUnorderedProps, GoListUnorderedEvents, GoListUnorderedSlots> {
}
export {};
