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
export type IoIosPaperProps = typeof __propDef.props;
export type IoIosPaperEvents = typeof __propDef.events;
export type IoIosPaperSlots = typeof __propDef.slots;
export default class IoIosPaper extends SvelteComponentTyped<IoIosPaperProps, IoIosPaperEvents, IoIosPaperSlots> {
}
export {};
