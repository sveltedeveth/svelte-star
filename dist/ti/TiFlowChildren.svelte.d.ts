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
export type TiFlowChildrenProps = typeof __propDef.props;
export type TiFlowChildrenEvents = typeof __propDef.events;
export type TiFlowChildrenSlots = typeof __propDef.slots;
export default class TiFlowChildren extends SvelteComponentTyped<TiFlowChildrenProps, TiFlowChildrenEvents, TiFlowChildrenSlots> {
}
export {};
