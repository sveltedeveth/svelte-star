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
export type MdBluetoothConnectedProps = typeof __propDef.props;
export type MdBluetoothConnectedEvents = typeof __propDef.events;
export type MdBluetoothConnectedSlots = typeof __propDef.slots;
export default class MdBluetoothConnected extends SvelteComponentTyped<MdBluetoothConnectedProps, MdBluetoothConnectedEvents, MdBluetoothConnectedSlots> {
}
export {};
