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
export type FaCalendarDayProps = typeof __propDef.props;
export type FaCalendarDayEvents = typeof __propDef.events;
export type FaCalendarDaySlots = typeof __propDef.slots;
export default class FaCalendarDay extends SvelteComponentTyped<FaCalendarDayProps, FaCalendarDayEvents, FaCalendarDaySlots> {
}
export {};
