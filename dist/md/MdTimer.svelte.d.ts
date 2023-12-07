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
export type MdTimerProps = typeof __propDef.props;
export type MdTimerEvents = typeof __propDef.events;
export type MdTimerSlots = typeof __propDef.slots;
export default class MdTimer extends SvelteComponentTyped<MdTimerProps, MdTimerEvents, MdTimerSlots> {
}
export {};
