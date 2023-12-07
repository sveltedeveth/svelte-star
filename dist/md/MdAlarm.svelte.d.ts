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
export type MdAlarmProps = typeof __propDef.props;
export type MdAlarmEvents = typeof __propDef.events;
export type MdAlarmSlots = typeof __propDef.slots;
export default class MdAlarm extends SvelteComponentTyped<MdAlarmProps, MdAlarmEvents, MdAlarmSlots> {
}
export {};
