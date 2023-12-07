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
export type MdDeviceHubProps = typeof __propDef.props;
export type MdDeviceHubEvents = typeof __propDef.events;
export type MdDeviceHubSlots = typeof __propDef.slots;
export default class MdDeviceHub extends SvelteComponentTyped<MdDeviceHubProps, MdDeviceHubEvents, MdDeviceHubSlots> {
}
export {};
