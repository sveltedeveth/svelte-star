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
export type IoIosPinProps = typeof __propDef.props;
export type IoIosPinEvents = typeof __propDef.events;
export type IoIosPinSlots = typeof __propDef.slots;
export default class IoIosPin extends SvelteComponentTyped<IoIosPinProps, IoIosPinEvents, IoIosPinSlots> {
}
export {};
