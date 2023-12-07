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
export type IoIosPrintProps = typeof __propDef.props;
export type IoIosPrintEvents = typeof __propDef.events;
export type IoIosPrintSlots = typeof __propDef.slots;
export default class IoIosPrint extends SvelteComponentTyped<IoIosPrintProps, IoIosPrintEvents, IoIosPrintSlots> {
}
export {};
