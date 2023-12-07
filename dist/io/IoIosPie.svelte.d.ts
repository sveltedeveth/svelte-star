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
export type IoIosPieProps = typeof __propDef.props;
export type IoIosPieEvents = typeof __propDef.events;
export type IoIosPieSlots = typeof __propDef.slots;
export default class IoIosPie extends SvelteComponentTyped<IoIosPieProps, IoIosPieEvents, IoIosPieSlots> {
}
export {};
