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
export type TiCalendarProps = typeof __propDef.props;
export type TiCalendarEvents = typeof __propDef.events;
export type TiCalendarSlots = typeof __propDef.slots;
export default class TiCalendar extends SvelteComponentTyped<TiCalendarProps, TiCalendarEvents, TiCalendarSlots> {
}
export {};
