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
export type IoIosMedkitProps = typeof __propDef.props;
export type IoIosMedkitEvents = typeof __propDef.events;
export type IoIosMedkitSlots = typeof __propDef.slots;
export default class IoIosMedkit extends SvelteComponentTyped<IoIosMedkitProps, IoIosMedkitEvents, IoIosMedkitSlots> {
}
export {};
