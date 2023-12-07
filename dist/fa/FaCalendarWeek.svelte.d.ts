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
export type FaCalendarWeekProps = typeof __propDef.props;
export type FaCalendarWeekEvents = typeof __propDef.events;
export type FaCalendarWeekSlots = typeof __propDef.slots;
export default class FaCalendarWeek extends SvelteComponentTyped<FaCalendarWeekProps, FaCalendarWeekEvents, FaCalendarWeekSlots> {
}
export {};
