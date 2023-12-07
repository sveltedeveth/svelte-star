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
export type MdEventBusyProps = typeof __propDef.props;
export type MdEventBusyEvents = typeof __propDef.events;
export type MdEventBusySlots = typeof __propDef.slots;
export default class MdEventBusy extends SvelteComponentTyped<MdEventBusyProps, MdEventBusyEvents, MdEventBusySlots> {
}
export {};
