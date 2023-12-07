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
export type MdTimerOffProps = typeof __propDef.props;
export type MdTimerOffEvents = typeof __propDef.events;
export type MdTimerOffSlots = typeof __propDef.slots;
export default class MdTimerOff extends SvelteComponentTyped<MdTimerOffProps, MdTimerOffEvents, MdTimerOffSlots> {
}
export {};
