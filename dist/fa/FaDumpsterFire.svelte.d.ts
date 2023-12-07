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
export type FaDumpsterFireProps = typeof __propDef.props;
export type FaDumpsterFireEvents = typeof __propDef.events;
export type FaDumpsterFireSlots = typeof __propDef.slots;
export default class FaDumpsterFire extends SvelteComponentTyped<FaDumpsterFireProps, FaDumpsterFireEvents, FaDumpsterFireSlots> {
}
export {};
