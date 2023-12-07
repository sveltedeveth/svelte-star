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
export type FaTableProps = typeof __propDef.props;
export type FaTableEvents = typeof __propDef.events;
export type FaTableSlots = typeof __propDef.slots;
export default class FaTable extends SvelteComponentTyped<FaTableProps, FaTableEvents, FaTableSlots> {
}
export {};
