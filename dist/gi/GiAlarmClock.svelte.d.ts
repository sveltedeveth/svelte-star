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
export type GiAlarmClockProps = typeof __propDef.props;
export type GiAlarmClockEvents = typeof __propDef.events;
export type GiAlarmClockSlots = typeof __propDef.slots;
export default class GiAlarmClock extends SvelteComponentTyped<GiAlarmClockProps, GiAlarmClockEvents, GiAlarmClockSlots> {
}
export {};
