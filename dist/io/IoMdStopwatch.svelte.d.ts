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
export type IoMdStopwatchProps = typeof __propDef.props;
export type IoMdStopwatchEvents = typeof __propDef.events;
export type IoMdStopwatchSlots = typeof __propDef.slots;
export default class IoMdStopwatch extends SvelteComponentTyped<IoMdStopwatchProps, IoMdStopwatchEvents, IoMdStopwatchSlots> {
}
export {};
