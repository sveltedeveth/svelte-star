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
export type MdCallMergeProps = typeof __propDef.props;
export type MdCallMergeEvents = typeof __propDef.events;
export type MdCallMergeSlots = typeof __propDef.slots;
export default class MdCallMerge extends SvelteComponentTyped<MdCallMergeProps, MdCallMergeEvents, MdCallMergeSlots> {
}
export {};
