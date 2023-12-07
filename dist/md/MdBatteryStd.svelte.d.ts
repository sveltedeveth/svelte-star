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
export type MdBatteryStdProps = typeof __propDef.props;
export type MdBatteryStdEvents = typeof __propDef.events;
export type MdBatteryStdSlots = typeof __propDef.slots;
export default class MdBatteryStd extends SvelteComponentTyped<MdBatteryStdProps, MdBatteryStdEvents, MdBatteryStdSlots> {
}
export {};
