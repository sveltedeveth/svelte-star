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
export type WiDayWindyProps = typeof __propDef.props;
export type WiDayWindyEvents = typeof __propDef.events;
export type WiDayWindySlots = typeof __propDef.slots;
export default class WiDayWindy extends SvelteComponentTyped<WiDayWindyProps, WiDayWindyEvents, WiDayWindySlots> {
}
export {};
