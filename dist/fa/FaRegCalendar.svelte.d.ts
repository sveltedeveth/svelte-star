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
export type FaRegCalendarProps = typeof __propDef.props;
export type FaRegCalendarEvents = typeof __propDef.events;
export type FaRegCalendarSlots = typeof __propDef.slots;
export default class FaRegCalendar extends SvelteComponentTyped<FaRegCalendarProps, FaRegCalendarEvents, FaRegCalendarSlots> {
}
export {};
