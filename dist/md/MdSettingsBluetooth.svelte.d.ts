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
export type MdSettingsBluetoothProps = typeof __propDef.props;
export type MdSettingsBluetoothEvents = typeof __propDef.events;
export type MdSettingsBluetoothSlots = typeof __propDef.slots;
export default class MdSettingsBluetooth extends SvelteComponentTyped<MdSettingsBluetoothProps, MdSettingsBluetoothEvents, MdSettingsBluetoothSlots> {
}
export {};
