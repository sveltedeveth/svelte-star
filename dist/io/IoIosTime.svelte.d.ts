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
export type IoIosTimeProps = typeof __propDef.props;
export type IoIosTimeEvents = typeof __propDef.events;
export type IoIosTimeSlots = typeof __propDef.slots;
export default class IoIosTime extends SvelteComponentTyped<IoIosTimeProps, IoIosTimeEvents, IoIosTimeSlots> {
}
export {};
