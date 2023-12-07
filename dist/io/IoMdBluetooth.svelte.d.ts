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
export type IoMdBluetoothProps = typeof __propDef.props;
export type IoMdBluetoothEvents = typeof __propDef.events;
export type IoMdBluetoothSlots = typeof __propDef.slots;
export default class IoMdBluetooth extends SvelteComponentTyped<IoMdBluetoothProps, IoMdBluetoothEvents, IoMdBluetoothSlots> {
}
export {};
