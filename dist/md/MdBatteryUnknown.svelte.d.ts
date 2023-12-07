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
export type MdBatteryUnknownProps = typeof __propDef.props;
export type MdBatteryUnknownEvents = typeof __propDef.events;
export type MdBatteryUnknownSlots = typeof __propDef.slots;
export default class MdBatteryUnknown extends SvelteComponentTyped<MdBatteryUnknownProps, MdBatteryUnknownEvents, MdBatteryUnknownSlots> {
}
export {};
