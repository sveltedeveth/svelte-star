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
export type FaLayerGroupProps = typeof __propDef.props;
export type FaLayerGroupEvents = typeof __propDef.events;
export type FaLayerGroupSlots = typeof __propDef.slots;
export default class FaLayerGroup extends SvelteComponentTyped<FaLayerGroupProps, FaLayerGroupEvents, FaLayerGroupSlots> {
}
export {};
