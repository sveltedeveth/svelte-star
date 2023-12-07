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
export type IoIosBedProps = typeof __propDef.props;
export type IoIosBedEvents = typeof __propDef.events;
export type IoIosBedSlots = typeof __propDef.slots;
export default class IoIosBed extends SvelteComponentTyped<IoIosBedProps, IoIosBedEvents, IoIosBedSlots> {
}
export {};
