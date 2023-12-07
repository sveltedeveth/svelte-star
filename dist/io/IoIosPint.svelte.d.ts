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
export type IoIosPintProps = typeof __propDef.props;
export type IoIosPintEvents = typeof __propDef.events;
export type IoIosPintSlots = typeof __propDef.slots;
export default class IoIosPint extends SvelteComponentTyped<IoIosPintProps, IoIosPintEvents, IoIosPintSlots> {
}
export {};
