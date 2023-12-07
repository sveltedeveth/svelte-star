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
export type IoMdClockProps = typeof __propDef.props;
export type IoMdClockEvents = typeof __propDef.events;
export type IoMdClockSlots = typeof __propDef.slots;
export default class IoMdClock extends SvelteComponentTyped<IoMdClockProps, IoMdClockEvents, IoMdClockSlots> {
}
export {};
