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
export type GiRingingAlarmProps = typeof __propDef.props;
export type GiRingingAlarmEvents = typeof __propDef.events;
export type GiRingingAlarmSlots = typeof __propDef.slots;
export default class GiRingingAlarm extends SvelteComponentTyped<GiRingingAlarmProps, GiRingingAlarmEvents, GiRingingAlarmSlots> {
}
export {};
