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
export type MdAddAlarmProps = typeof __propDef.props;
export type MdAddAlarmEvents = typeof __propDef.events;
export type MdAddAlarmSlots = typeof __propDef.slots;
export default class MdAddAlarm extends SvelteComponentTyped<MdAddAlarmProps, MdAddAlarmEvents, MdAddAlarmSlots> {
}
export {};
