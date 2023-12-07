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
export type IoIosCafeProps = typeof __propDef.props;
export type IoIosCafeEvents = typeof __propDef.events;
export type IoIosCafeSlots = typeof __propDef.slots;
export default class IoIosCafe extends SvelteComponentTyped<IoIosCafeProps, IoIosCafeEvents, IoIosCafeSlots> {
}
export {};
