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
export type IoIosSyncProps = typeof __propDef.props;
export type IoIosSyncEvents = typeof __propDef.events;
export type IoIosSyncSlots = typeof __propDef.slots;
export default class IoIosSync extends SvelteComponentTyped<IoIosSyncProps, IoIosSyncEvents, IoIosSyncSlots> {
}
export {};
