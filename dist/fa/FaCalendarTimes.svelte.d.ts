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
export type FaCalendarTimesProps = typeof __propDef.props;
export type FaCalendarTimesEvents = typeof __propDef.events;
export type FaCalendarTimesSlots = typeof __propDef.slots;
export default class FaCalendarTimes extends SvelteComponentTyped<FaCalendarTimesProps, FaCalendarTimesEvents, FaCalendarTimesSlots> {
}
export {};
