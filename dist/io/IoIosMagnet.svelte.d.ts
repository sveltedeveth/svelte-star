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
export type IoIosMagnetProps = typeof __propDef.props;
export type IoIosMagnetEvents = typeof __propDef.events;
export type IoIosMagnetSlots = typeof __propDef.slots;
export default class IoIosMagnet extends SvelteComponentTyped<IoIosMagnetProps, IoIosMagnetEvents, IoIosMagnetSlots> {
}
export {};
