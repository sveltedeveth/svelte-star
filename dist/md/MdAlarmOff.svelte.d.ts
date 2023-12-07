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
export type MdAlarmOffProps = typeof __propDef.props;
export type MdAlarmOffEvents = typeof __propDef.events;
export type MdAlarmOffSlots = typeof __propDef.slots;
export default class MdAlarmOff extends SvelteComponentTyped<MdAlarmOffProps, MdAlarmOffEvents, MdAlarmOffSlots> {
}
export {};
