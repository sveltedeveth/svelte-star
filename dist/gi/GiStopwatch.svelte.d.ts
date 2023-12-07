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
export type GiStopwatchProps = typeof __propDef.props;
export type GiStopwatchEvents = typeof __propDef.events;
export type GiStopwatchSlots = typeof __propDef.slots;
export default class GiStopwatch extends SvelteComponentTyped<GiStopwatchProps, GiStopwatchEvents, GiStopwatchSlots> {
}
export {};
