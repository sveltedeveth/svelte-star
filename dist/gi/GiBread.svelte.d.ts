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
export type GiBreadProps = typeof __propDef.props;
export type GiBreadEvents = typeof __propDef.events;
export type GiBreadSlots = typeof __propDef.slots;
export default class GiBread extends SvelteComponentTyped<GiBreadProps, GiBreadEvents, GiBreadSlots> {
}
export {};
