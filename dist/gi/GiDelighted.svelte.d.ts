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
export type GiDelightedProps = typeof __propDef.props;
export type GiDelightedEvents = typeof __propDef.events;
export type GiDelightedSlots = typeof __propDef.slots;
export default class GiDelighted extends SvelteComponentTyped<GiDelightedProps, GiDelightedEvents, GiDelightedSlots> {
}
export {};
