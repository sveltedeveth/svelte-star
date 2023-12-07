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
export type IoIosMoonProps = typeof __propDef.props;
export type IoIosMoonEvents = typeof __propDef.events;
export type IoIosMoonSlots = typeof __propDef.slots;
export default class IoIosMoon extends SvelteComponentTyped<IoIosMoonProps, IoIosMoonEvents, IoIosMoonSlots> {
}
export {};
