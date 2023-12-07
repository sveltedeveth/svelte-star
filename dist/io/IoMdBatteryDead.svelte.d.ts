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
export type IoMdBatteryDeadProps = typeof __propDef.props;
export type IoMdBatteryDeadEvents = typeof __propDef.events;
export type IoMdBatteryDeadSlots = typeof __propDef.slots;
export default class IoMdBatteryDead extends SvelteComponentTyped<IoMdBatteryDeadProps, IoMdBatteryDeadEvents, IoMdBatteryDeadSlots> {
}
export {};
