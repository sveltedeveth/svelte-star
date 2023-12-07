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
export type IoIosTodayProps = typeof __propDef.props;
export type IoIosTodayEvents = typeof __propDef.events;
export type IoIosTodaySlots = typeof __propDef.slots;
export default class IoIosToday extends SvelteComponentTyped<IoIosTodayProps, IoIosTodayEvents, IoIosTodaySlots> {
}
export {};
