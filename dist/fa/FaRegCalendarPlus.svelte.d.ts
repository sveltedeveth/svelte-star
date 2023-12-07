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
export type FaRegCalendarPlusProps = typeof __propDef.props;
export type FaRegCalendarPlusEvents = typeof __propDef.events;
export type FaRegCalendarPlusSlots = typeof __propDef.slots;
export default class FaRegCalendarPlus extends SvelteComponentTyped<FaRegCalendarPlusProps, FaRegCalendarPlusEvents, FaRegCalendarPlusSlots> {
}
export {};
