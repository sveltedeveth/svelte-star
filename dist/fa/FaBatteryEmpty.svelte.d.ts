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
export type FaBatteryEmptyProps = typeof __propDef.props;
export type FaBatteryEmptyEvents = typeof __propDef.events;
export type FaBatteryEmptySlots = typeof __propDef.slots;
export default class FaBatteryEmpty extends SvelteComponentTyped<FaBatteryEmptyProps, FaBatteryEmptyEvents, FaBatteryEmptySlots> {
}
export {};
