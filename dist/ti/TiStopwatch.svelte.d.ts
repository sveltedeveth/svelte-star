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
export type TiStopwatchProps = typeof __propDef.props;
export type TiStopwatchEvents = typeof __propDef.events;
export type TiStopwatchSlots = typeof __propDef.slots;
export default class TiStopwatch extends SvelteComponentTyped<TiStopwatchProps, TiStopwatchEvents, TiStopwatchSlots> {
}
export {};
