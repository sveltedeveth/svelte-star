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
export type MdPermContactCalendarProps = typeof __propDef.props;
export type MdPermContactCalendarEvents = typeof __propDef.events;
export type MdPermContactCalendarSlots = typeof __propDef.slots;
export default class MdPermContactCalendar extends SvelteComponentTyped<MdPermContactCalendarProps, MdPermContactCalendarEvents, MdPermContactCalendarSlots> {
}
export {};
