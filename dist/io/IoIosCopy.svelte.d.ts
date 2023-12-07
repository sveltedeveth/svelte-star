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
export type IoIosCopyProps = typeof __propDef.props;
export type IoIosCopyEvents = typeof __propDef.events;
export type IoIosCopySlots = typeof __propDef.slots;
export default class IoIosCopy extends SvelteComponentTyped<IoIosCopyProps, IoIosCopyEvents, IoIosCopySlots> {
}
export {};
