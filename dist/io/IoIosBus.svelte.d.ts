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
export type IoIosBusProps = typeof __propDef.props;
export type IoIosBusEvents = typeof __propDef.events;
export type IoIosBusSlots = typeof __propDef.slots;
export default class IoIosBus extends SvelteComponentTyped<IoIosBusProps, IoIosBusEvents, IoIosBusSlots> {
}
export {};
