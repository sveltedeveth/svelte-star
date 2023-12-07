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
export type FaDochubProps = typeof __propDef.props;
export type FaDochubEvents = typeof __propDef.events;
export type FaDochubSlots = typeof __propDef.slots;
export default class FaDochub extends SvelteComponentTyped<FaDochubProps, FaDochubEvents, FaDochubSlots> {
}
export {};
