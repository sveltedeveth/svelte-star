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
export type IoIosTvProps = typeof __propDef.props;
export type IoIosTvEvents = typeof __propDef.events;
export type IoIosTvSlots = typeof __propDef.slots;
export default class IoIosTv extends SvelteComponentTyped<IoIosTvProps, IoIosTvEvents, IoIosTvSlots> {
}
export {};
