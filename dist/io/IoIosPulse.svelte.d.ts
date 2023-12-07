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
export type IoIosPulseProps = typeof __propDef.props;
export type IoIosPulseEvents = typeof __propDef.events;
export type IoIosPulseSlots = typeof __propDef.slots;
export default class IoIosPulse extends SvelteComponentTyped<IoIosPulseProps, IoIosPulseEvents, IoIosPulseSlots> {
}
export {};
