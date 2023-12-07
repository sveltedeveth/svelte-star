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
export type IoIosAlarmProps = typeof __propDef.props;
export type IoIosAlarmEvents = typeof __propDef.events;
export type IoIosAlarmSlots = typeof __propDef.slots;
export default class IoIosAlarm extends SvelteComponentTyped<IoIosAlarmProps, IoIosAlarmEvents, IoIosAlarmSlots> {
}
export {};
