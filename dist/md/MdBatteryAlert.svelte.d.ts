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
export type MdBatteryAlertProps = typeof __propDef.props;
export type MdBatteryAlertEvents = typeof __propDef.events;
export type MdBatteryAlertSlots = typeof __propDef.slots;
export default class MdBatteryAlert extends SvelteComponentTyped<MdBatteryAlertProps, MdBatteryAlertEvents, MdBatteryAlertSlots> {
}
export {};
