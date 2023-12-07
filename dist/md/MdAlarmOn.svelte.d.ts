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
export type MdAlarmOnProps = typeof __propDef.props;
export type MdAlarmOnEvents = typeof __propDef.events;
export type MdAlarmOnSlots = typeof __propDef.slots;
export default class MdAlarmOn extends SvelteComponentTyped<MdAlarmOnProps, MdAlarmOnEvents, MdAlarmOnSlots> {
}
export {};
