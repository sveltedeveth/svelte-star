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
export type FaCalendarPlusProps = typeof __propDef.props;
export type FaCalendarPlusEvents = typeof __propDef.events;
export type FaCalendarPlusSlots = typeof __propDef.slots;
export default class FaCalendarPlus extends SvelteComponentTyped<FaCalendarPlusProps, FaCalendarPlusEvents, FaCalendarPlusSlots> {
}
export {};
