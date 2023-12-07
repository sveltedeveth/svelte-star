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
export type FaDumpsterProps = typeof __propDef.props;
export type FaDumpsterEvents = typeof __propDef.events;
export type FaDumpsterSlots = typeof __propDef.slots;
export default class FaDumpster extends SvelteComponentTyped<FaDumpsterProps, FaDumpsterEvents, FaDumpsterSlots> {
}
export {};
