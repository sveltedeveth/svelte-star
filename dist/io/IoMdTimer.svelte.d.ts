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
export type IoMdTimerProps = typeof __propDef.props;
export type IoMdTimerEvents = typeof __propDef.events;
export type IoMdTimerSlots = typeof __propDef.slots;
export default class IoMdTimer extends SvelteComponentTyped<IoMdTimerProps, IoMdTimerEvents, IoMdTimerSlots> {
}
export {};
