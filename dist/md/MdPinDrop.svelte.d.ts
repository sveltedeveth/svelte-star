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
export type MdPinDropProps = typeof __propDef.props;
export type MdPinDropEvents = typeof __propDef.events;
export type MdPinDropSlots = typeof __propDef.slots;
export default class MdPinDrop extends SvelteComponentTyped<MdPinDropProps, MdPinDropEvents, MdPinDropSlots> {
}
export {};
