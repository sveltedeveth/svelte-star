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
export type TiBatteryFullProps = typeof __propDef.props;
export type TiBatteryFullEvents = typeof __propDef.events;
export type TiBatteryFullSlots = typeof __propDef.slots;
export default class TiBatteryFull extends SvelteComponentTyped<TiBatteryFullProps, TiBatteryFullEvents, TiBatteryFullSlots> {
}
export {};
