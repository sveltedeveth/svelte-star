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
export type FaCalendarProps = typeof __propDef.props;
export type FaCalendarEvents = typeof __propDef.events;
export type FaCalendarSlots = typeof __propDef.slots;
export default class FaCalendar extends SvelteComponentTyped<FaCalendarProps, FaCalendarEvents, FaCalendarSlots> {
}
export {};
