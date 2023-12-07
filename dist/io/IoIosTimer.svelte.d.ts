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
export type IoIosTimerProps = typeof __propDef.props;
export type IoIosTimerEvents = typeof __propDef.events;
export type IoIosTimerSlots = typeof __propDef.slots;
export default class IoIosTimer extends SvelteComponentTyped<IoIosTimerProps, IoIosTimerEvents, IoIosTimerSlots> {
}
export {};
