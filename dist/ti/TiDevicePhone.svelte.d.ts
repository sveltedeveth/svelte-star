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
export type TiDevicePhoneProps = typeof __propDef.props;
export type TiDevicePhoneEvents = typeof __propDef.events;
export type TiDevicePhoneSlots = typeof __propDef.slots;
export default class TiDevicePhone extends SvelteComponentTyped<TiDevicePhoneProps, TiDevicePhoneEvents, TiDevicePhoneSlots> {
}
export {};
