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
export type FaStopwatchProps = typeof __propDef.props;
export type FaStopwatchEvents = typeof __propDef.events;
export type FaStopwatchSlots = typeof __propDef.slots;
export default class FaStopwatch extends SvelteComponentTyped<FaStopwatchProps, FaStopwatchEvents, FaStopwatchSlots> {
}
export {};
