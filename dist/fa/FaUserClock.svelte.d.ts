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
export type FaUserClockProps = typeof __propDef.props;
export type FaUserClockEvents = typeof __propDef.events;
export type FaUserClockSlots = typeof __propDef.slots;
export default class FaUserClock extends SvelteComponentTyped<FaUserClockProps, FaUserClockEvents, FaUserClockSlots> {
}
export {};
