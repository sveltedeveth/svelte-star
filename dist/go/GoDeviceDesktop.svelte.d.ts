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
export type GoDeviceDesktopProps = typeof __propDef.props;
export type GoDeviceDesktopEvents = typeof __propDef.events;
export type GoDeviceDesktopSlots = typeof __propDef.slots;
export default class GoDeviceDesktop extends SvelteComponentTyped<GoDeviceDesktopProps, GoDeviceDesktopEvents, GoDeviceDesktopSlots> {
}
export {};
