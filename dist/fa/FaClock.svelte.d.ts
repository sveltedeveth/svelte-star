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
export type FaClockProps = typeof __propDef.props;
export type FaClockEvents = typeof __propDef.events;
export type FaClockSlots = typeof __propDef.slots;
export default class FaClock extends SvelteComponentTyped<FaClockProps, FaClockEvents, FaClockSlots> {
}
export {};
