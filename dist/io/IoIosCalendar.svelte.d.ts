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
export type IoIosCalendarProps = typeof __propDef.props;
export type IoIosCalendarEvents = typeof __propDef.events;
export type IoIosCalendarSlots = typeof __propDef.slots;
export default class IoIosCalendar extends SvelteComponentTyped<IoIosCalendarProps, IoIosCalendarEvents, IoIosCalendarSlots> {
}
export {};
