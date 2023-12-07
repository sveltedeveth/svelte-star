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
export type MdDateRangeProps = typeof __propDef.props;
export type MdDateRangeEvents = typeof __propDef.events;
export type MdDateRangeSlots = typeof __propDef.slots;
export default class MdDateRange extends SvelteComponentTyped<MdDateRangeProps, MdDateRangeEvents, MdDateRangeSlots> {
}
export {};
