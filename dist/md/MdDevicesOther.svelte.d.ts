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
export type MdDevicesOtherProps = typeof __propDef.props;
export type MdDevicesOtherEvents = typeof __propDef.events;
export type MdDevicesOtherSlots = typeof __propDef.slots;
export default class MdDevicesOther extends SvelteComponentTyped<MdDevicesOtherProps, MdDevicesOtherEvents, MdDevicesOtherSlots> {
}
export {};
