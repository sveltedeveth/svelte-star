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
export type MdFilterListProps = typeof __propDef.props;
export type MdFilterListEvents = typeof __propDef.events;
export type MdFilterListSlots = typeof __propDef.slots;
export default class MdFilterList extends SvelteComponentTyped<MdFilterListProps, MdFilterListEvents, MdFilterListSlots> {
}
export {};
