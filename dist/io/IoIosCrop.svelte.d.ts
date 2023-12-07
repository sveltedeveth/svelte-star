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
export type IoIosCropProps = typeof __propDef.props;
export type IoIosCropEvents = typeof __propDef.events;
export type IoIosCropSlots = typeof __propDef.slots;
export default class IoIosCrop extends SvelteComponentTyped<IoIosCropProps, IoIosCropEvents, IoIosCropSlots> {
}
export {};
