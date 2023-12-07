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
export type MdNextWeekProps = typeof __propDef.props;
export type MdNextWeekEvents = typeof __propDef.events;
export type MdNextWeekSlots = typeof __propDef.slots;
export default class MdNextWeek extends SvelteComponentTyped<MdNextWeekProps, MdNextWeekEvents, MdNextWeekSlots> {
}
export {};
