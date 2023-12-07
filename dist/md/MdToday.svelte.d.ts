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
export type MdTodayProps = typeof __propDef.props;
export type MdTodayEvents = typeof __propDef.events;
export type MdTodaySlots = typeof __propDef.slots;
export default class MdToday extends SvelteComponentTyped<MdTodayProps, MdTodayEvents, MdTodaySlots> {
}
export {};
