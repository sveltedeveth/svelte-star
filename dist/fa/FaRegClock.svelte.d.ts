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
export type FaRegClockProps = typeof __propDef.props;
export type FaRegClockEvents = typeof __propDef.events;
export type FaRegClockSlots = typeof __propDef.slots;
export default class FaRegClock extends SvelteComponentTyped<FaRegClockProps, FaRegClockEvents, FaRegClockSlots> {
}
export {};
