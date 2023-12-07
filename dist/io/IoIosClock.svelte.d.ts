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
export type IoIosClockProps = typeof __propDef.props;
export type IoIosClockEvents = typeof __propDef.events;
export type IoIosClockSlots = typeof __propDef.slots;
export default class IoIosClock extends SvelteComponentTyped<IoIosClockProps, IoIosClockEvents, IoIosClockSlots> {
}
export {};
