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
export type TiFlowParallelProps = typeof __propDef.props;
export type TiFlowParallelEvents = typeof __propDef.events;
export type TiFlowParallelSlots = typeof __propDef.slots;
export default class TiFlowParallel extends SvelteComponentTyped<TiFlowParallelProps, TiFlowParallelEvents, TiFlowParallelSlots> {
}
export {};
