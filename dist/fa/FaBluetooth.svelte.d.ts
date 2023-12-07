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
export type FaBluetoothProps = typeof __propDef.props;
export type FaBluetoothEvents = typeof __propDef.events;
export type FaBluetoothSlots = typeof __propDef.slots;
export default class FaBluetooth extends SvelteComponentTyped<FaBluetoothProps, FaBluetoothEvents, FaBluetoothSlots> {
}
export {};
