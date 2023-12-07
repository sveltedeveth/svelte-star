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
export type IoIosCellularProps = typeof __propDef.props;
export type IoIosCellularEvents = typeof __propDef.events;
export type IoIosCellularSlots = typeof __propDef.slots;
export default class IoIosCellular extends SvelteComponentTyped<IoIosCellularProps, IoIosCellularEvents, IoIosCellularSlots> {
}
export {};
