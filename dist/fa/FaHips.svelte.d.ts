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
export type FaHipsProps = typeof __propDef.props;
export type FaHipsEvents = typeof __propDef.events;
export type FaHipsSlots = typeof __propDef.slots;
export default class FaHips extends SvelteComponentTyped<FaHipsProps, FaHipsEvents, FaHipsSlots> {
}
export {};
