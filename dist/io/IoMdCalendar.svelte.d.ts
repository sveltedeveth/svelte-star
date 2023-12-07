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
export type IoMdCalendarProps = typeof __propDef.props;
export type IoMdCalendarEvents = typeof __propDef.events;
export type IoMdCalendarSlots = typeof __propDef.slots;
export default class IoMdCalendar extends SvelteComponentTyped<IoMdCalendarProps, IoMdCalendarEvents, IoMdCalendarSlots> {
}
export {};
