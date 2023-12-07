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
export type IoIosCashProps = typeof __propDef.props;
export type IoIosCashEvents = typeof __propDef.events;
export type IoIosCashSlots = typeof __propDef.slots;
export default class IoIosCash extends SvelteComponentTyped<IoIosCashProps, IoIosCashEvents, IoIosCashSlots> {
}
export {};
