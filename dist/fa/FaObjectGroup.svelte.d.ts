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
export type FaObjectGroupProps = typeof __propDef.props;
export type FaObjectGroupEvents = typeof __propDef.events;
export type FaObjectGroupSlots = typeof __propDef.slots;
export default class FaObjectGroup extends SvelteComponentTyped<FaObjectGroupProps, FaObjectGroupEvents, FaObjectGroupSlots> {
}
export {};
