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
export type MdAlarmAddProps = typeof __propDef.props;
export type MdAlarmAddEvents = typeof __propDef.events;
export type MdAlarmAddSlots = typeof __propDef.slots;
export default class MdAlarmAdd extends SvelteComponentTyped<MdAlarmAddProps, MdAlarmAddEvents, MdAlarmAddSlots> {
}
export {};
