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
export type GiTableProps = typeof __propDef.props;
export type GiTableEvents = typeof __propDef.events;
export type GiTableSlots = typeof __propDef.slots;
export default class GiTable extends SvelteComponentTyped<GiTableProps, GiTableEvents, GiTableSlots> {
}
export {};
