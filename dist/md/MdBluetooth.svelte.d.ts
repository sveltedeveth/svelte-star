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
export type MdBluetoothProps = typeof __propDef.props;
export type MdBluetoothEvents = typeof __propDef.events;
export type MdBluetoothSlots = typeof __propDef.slots;
export default class MdBluetooth extends SvelteComponentTyped<MdBluetoothProps, MdBluetoothEvents, MdBluetoothSlots> {
}
export {};
