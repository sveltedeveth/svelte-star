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
export type IoMdBatteryFullProps = typeof __propDef.props;
export type IoMdBatteryFullEvents = typeof __propDef.events;
export type IoMdBatteryFullSlots = typeof __propDef.slots;
export default class IoMdBatteryFull extends SvelteComponentTyped<IoMdBatteryFullProps, IoMdBatteryFullEvents, IoMdBatteryFullSlots> {
}
export {};
