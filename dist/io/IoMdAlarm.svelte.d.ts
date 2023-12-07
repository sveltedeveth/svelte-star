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
export type IoMdAlarmProps = typeof __propDef.props;
export type IoMdAlarmEvents = typeof __propDef.events;
export type IoMdAlarmSlots = typeof __propDef.slots;
export default class IoMdAlarm extends SvelteComponentTyped<IoMdAlarmProps, IoMdAlarmEvents, IoMdAlarmSlots> {
}
export {};
