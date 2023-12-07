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
export type IoIosBluetoothProps = typeof __propDef.props;
export type IoIosBluetoothEvents = typeof __propDef.events;
export type IoIosBluetoothSlots = typeof __propDef.slots;
export default class IoIosBluetooth extends SvelteComponentTyped<IoIosBluetoothProps, IoIosBluetoothEvents, IoIosBluetoothSlots> {
}
export {};
