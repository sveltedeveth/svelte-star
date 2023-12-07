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
export type MdBatteryFullProps = typeof __propDef.props;
export type MdBatteryFullEvents = typeof __propDef.events;
export type MdBatteryFullSlots = typeof __propDef.slots;
export default class MdBatteryFull extends SvelteComponentTyped<MdBatteryFullProps, MdBatteryFullEvents, MdBatteryFullSlots> {
}
export {};
