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
export type FaCalendarMinusProps = typeof __propDef.props;
export type FaCalendarMinusEvents = typeof __propDef.events;
export type FaCalendarMinusSlots = typeof __propDef.slots;
export default class FaCalendarMinus extends SvelteComponentTyped<FaCalendarMinusProps, FaCalendarMinusEvents, FaCalendarMinusSlots> {
}
export {};
