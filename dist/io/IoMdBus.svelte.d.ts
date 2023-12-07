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
export type IoMdBusProps = typeof __propDef.props;
export type IoMdBusEvents = typeof __propDef.events;
export type IoMdBusSlots = typeof __propDef.slots;
export default class IoMdBus extends SvelteComponentTyped<IoMdBusProps, IoMdBusEvents, IoMdBusSlots> {
}
export {};
