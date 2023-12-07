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
export type GiUsbKeyProps = typeof __propDef.props;
export type GiUsbKeyEvents = typeof __propDef.events;
export type GiUsbKeySlots = typeof __propDef.slots;
export default class GiUsbKey extends SvelteComponentTyped<GiUsbKeyProps, GiUsbKeyEvents, GiUsbKeySlots> {
}
export {};
