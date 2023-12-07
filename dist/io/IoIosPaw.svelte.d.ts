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
export type IoIosPawProps = typeof __propDef.props;
export type IoIosPawEvents = typeof __propDef.events;
export type IoIosPawSlots = typeof __propDef.slots;
export default class IoIosPaw extends SvelteComponentTyped<IoIosPawProps, IoIosPawEvents, IoIosPawSlots> {
}
export {};
