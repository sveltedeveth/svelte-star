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
export type FaWarehouseProps = typeof __propDef.props;
export type FaWarehouseEvents = typeof __propDef.events;
export type FaWarehouseSlots = typeof __propDef.slots;
export default class FaWarehouse extends SvelteComponentTyped<FaWarehouseProps, FaWarehouseEvents, FaWarehouseSlots> {
}
export {};
