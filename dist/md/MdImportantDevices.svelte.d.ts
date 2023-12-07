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
export type MdImportantDevicesProps = typeof __propDef.props;
export type MdImportantDevicesEvents = typeof __propDef.events;
export type MdImportantDevicesSlots = typeof __propDef.slots;
export default class MdImportantDevices extends SvelteComponentTyped<MdImportantDevicesProps, MdImportantDevicesEvents, MdImportantDevicesSlots> {
}
export {};
