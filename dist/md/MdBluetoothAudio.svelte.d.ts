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
export type MdBluetoothAudioProps = typeof __propDef.props;
export type MdBluetoothAudioEvents = typeof __propDef.events;
export type MdBluetoothAudioSlots = typeof __propDef.slots;
export default class MdBluetoothAudio extends SvelteComponentTyped<MdBluetoothAudioProps, MdBluetoothAudioEvents, MdBluetoothAudioSlots> {
}
export {};
