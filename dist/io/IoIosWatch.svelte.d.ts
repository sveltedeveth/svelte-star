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
export type IoIosWatchProps = typeof __propDef.props;
export type IoIosWatchEvents = typeof __propDef.events;
export type IoIosWatchSlots = typeof __propDef.slots;
export default class IoIosWatch extends SvelteComponentTyped<IoIosWatchProps, IoIosWatchEvents, IoIosWatchSlots> {
}
export {};
