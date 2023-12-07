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
export type IoMdTodayProps = typeof __propDef.props;
export type IoMdTodayEvents = typeof __propDef.events;
export type IoMdTodaySlots = typeof __propDef.slots;
export default class IoMdToday extends SvelteComponentTyped<IoMdTodayProps, IoMdTodayEvents, IoMdTodaySlots> {
}
export {};
