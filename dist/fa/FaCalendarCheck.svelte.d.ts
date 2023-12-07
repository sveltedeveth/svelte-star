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
export type FaCalendarCheckProps = typeof __propDef.props;
export type FaCalendarCheckEvents = typeof __propDef.events;
export type FaCalendarCheckSlots = typeof __propDef.slots;
export default class FaCalendarCheck extends SvelteComponentTyped<FaCalendarCheckProps, FaCalendarCheckEvents, FaCalendarCheckSlots> {
}
export {};
