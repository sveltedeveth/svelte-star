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
export type IoIosBugProps = typeof __propDef.props;
export type IoIosBugEvents = typeof __propDef.events;
export type IoIosBugSlots = typeof __propDef.slots;
export default class IoIosBug extends SvelteComponentTyped<IoIosBugProps, IoIosBugEvents, IoIosBugSlots> {
}
export {};
