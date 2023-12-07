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
export type IoIosSadProps = typeof __propDef.props;
export type IoIosSadEvents = typeof __propDef.events;
export type IoIosSadSlots = typeof __propDef.slots;
export default class IoIosSad extends SvelteComponentTyped<IoIosSadProps, IoIosSadEvents, IoIosSadSlots> {
}
export {};
