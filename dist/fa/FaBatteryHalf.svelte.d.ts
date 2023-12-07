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
export type FaBatteryHalfProps = typeof __propDef.props;
export type FaBatteryHalfEvents = typeof __propDef.events;
export type FaBatteryHalfSlots = typeof __propDef.slots;
export default class FaBatteryHalf extends SvelteComponentTyped<FaBatteryHalfProps, FaBatteryHalfEvents, FaBatteryHalfSlots> {
}
export {};
