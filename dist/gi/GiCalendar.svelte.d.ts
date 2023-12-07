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
export type GiCalendarProps = typeof __propDef.props;
export type GiCalendarEvents = typeof __propDef.events;
export type GiCalendarSlots = typeof __propDef.slots;
export default class GiCalendar extends SvelteComponentTyped<GiCalendarProps, GiCalendarEvents, GiCalendarSlots> {
}
export {};
