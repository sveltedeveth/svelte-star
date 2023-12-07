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
export type TiFlowMergeProps = typeof __propDef.props;
export type TiFlowMergeEvents = typeof __propDef.events;
export type TiFlowMergeSlots = typeof __propDef.slots;
export default class TiFlowMerge extends SvelteComponentTyped<TiFlowMergeProps, TiFlowMergeEvents, TiFlowMergeSlots> {
}
export {};
