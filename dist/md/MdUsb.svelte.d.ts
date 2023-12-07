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
export type MdUsbProps = typeof __propDef.props;
export type MdUsbEvents = typeof __propDef.events;
export type MdUsbSlots = typeof __propDef.slots;
export default class MdUsb extends SvelteComponentTyped<MdUsbProps, MdUsbEvents, MdUsbSlots> {
}
export {};
