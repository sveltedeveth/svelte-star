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
export type MdAccessAlarmProps = typeof __propDef.props;
export type MdAccessAlarmEvents = typeof __propDef.events;
export type MdAccessAlarmSlots = typeof __propDef.slots;
export default class MdAccessAlarm extends SvelteComponentTyped<MdAccessAlarmProps, MdAccessAlarmEvents, MdAccessAlarmSlots> {
}
export {};
