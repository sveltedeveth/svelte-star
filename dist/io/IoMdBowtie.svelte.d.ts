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
export type IoMdBowtieProps = typeof __propDef.props;
export type IoMdBowtieEvents = typeof __propDef.events;
export type IoMdBowtieSlots = typeof __propDef.slots;
export default class IoMdBowtie extends SvelteComponentTyped<IoMdBowtieProps, IoMdBowtieEvents, IoMdBowtieSlots> {
}
export {};
