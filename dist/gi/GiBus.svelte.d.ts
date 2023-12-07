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
export type GiBusProps = typeof __propDef.props;
export type GiBusEvents = typeof __propDef.events;
export type GiBusSlots = typeof __propDef.slots;
export default class GiBus extends SvelteComponentTyped<GiBusProps, GiBusEvents, GiBusSlots> {
}
export {};
