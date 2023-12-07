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
export type TiDeviceDesktopProps = typeof __propDef.props;
export type TiDeviceDesktopEvents = typeof __propDef.events;
export type TiDeviceDesktopSlots = typeof __propDef.slots;
export default class TiDeviceDesktop extends SvelteComponentTyped<TiDeviceDesktopProps, TiDeviceDesktopEvents, TiDeviceDesktopSlots> {
}
export {};
