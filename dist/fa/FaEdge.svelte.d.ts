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
export type FaEdgeProps = typeof __propDef.props;
export type FaEdgeEvents = typeof __propDef.events;
export type FaEdgeSlots = typeof __propDef.slots;
export default class FaEdge extends SvelteComponentTyped<FaEdgeProps, FaEdgeEvents, FaEdgeSlots> {
}
export {};
