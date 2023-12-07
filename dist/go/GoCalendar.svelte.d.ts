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
export type GoCalendarProps = typeof __propDef.props;
export type GoCalendarEvents = typeof __propDef.events;
export type GoCalendarSlots = typeof __propDef.slots;
export default class GoCalendar extends SvelteComponentTyped<GoCalendarProps, GoCalendarEvents, GoCalendarSlots> {
}
export {};
