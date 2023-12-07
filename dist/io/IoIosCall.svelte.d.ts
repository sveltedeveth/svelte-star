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
export type IoIosCallProps = typeof __propDef.props;
export type IoIosCallEvents = typeof __propDef.events;
export type IoIosCallSlots = typeof __propDef.slots;
export default class IoIosCall extends SvelteComponentTyped<IoIosCallProps, IoIosCallEvents, IoIosCallSlots> {
}
export {};
