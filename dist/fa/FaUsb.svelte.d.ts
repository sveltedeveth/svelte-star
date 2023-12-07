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
export type FaUsbProps = typeof __propDef.props;
export type FaUsbEvents = typeof __propDef.events;
export type FaUsbSlots = typeof __propDef.slots;
export default class FaUsb extends SvelteComponentTyped<FaUsbProps, FaUsbEvents, FaUsbSlots> {
}
export {};
