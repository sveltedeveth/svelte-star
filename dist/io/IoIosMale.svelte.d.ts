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
export type IoIosMaleProps = typeof __propDef.props;
export type IoIosMaleEvents = typeof __propDef.events;
export type IoIosMaleSlots = typeof __propDef.slots;
export default class IoIosMale extends SvelteComponentTyped<IoIosMaleProps, IoIosMaleEvents, IoIosMaleSlots> {
}
export {};
