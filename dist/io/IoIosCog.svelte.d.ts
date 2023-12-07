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
export type IoIosCogProps = typeof __propDef.props;
export type IoIosCogEvents = typeof __propDef.events;
export type IoIosCogSlots = typeof __propDef.slots;
export default class IoIosCog extends SvelteComponentTyped<IoIosCogProps, IoIosCogEvents, IoIosCogSlots> {
}
export {};
