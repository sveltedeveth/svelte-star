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
export type MdScheduleProps = typeof __propDef.props;
export type MdScheduleEvents = typeof __propDef.events;
export type MdScheduleSlots = typeof __propDef.slots;
export default class MdSchedule extends SvelteComponentTyped<MdScheduleProps, MdScheduleEvents, MdScheduleSlots> {
}
export {};
