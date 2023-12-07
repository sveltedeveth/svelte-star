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
export type MdDevicesProps = typeof __propDef.props;
export type MdDevicesEvents = typeof __propDef.events;
export type MdDevicesSlots = typeof __propDef.slots;
export default class MdDevices extends SvelteComponentTyped<MdDevicesProps, MdDevicesEvents, MdDevicesSlots> {
}
export {};
