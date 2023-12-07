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
export type IoIosPauseProps = typeof __propDef.props;
export type IoIosPauseEvents = typeof __propDef.events;
export type IoIosPauseSlots = typeof __propDef.slots;
export default class IoIosPause extends SvelteComponentTyped<IoIosPauseProps, IoIosPauseEvents, IoIosPauseSlots> {
}
export {};
