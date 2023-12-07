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
export type IoIosStopwatchProps = typeof __propDef.props;
export type IoIosStopwatchEvents = typeof __propDef.events;
export type IoIosStopwatchSlots = typeof __propDef.slots;
export default class IoIosStopwatch extends SvelteComponentTyped<IoIosStopwatchProps, IoIosStopwatchEvents, IoIosStopwatchSlots> {
}
export {};
