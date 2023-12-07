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
export type TiDeviceTabletProps = typeof __propDef.props;
export type TiDeviceTabletEvents = typeof __propDef.events;
export type TiDeviceTabletSlots = typeof __propDef.slots;
export default class TiDeviceTablet extends SvelteComponentTyped<TiDeviceTabletProps, TiDeviceTabletEvents, TiDeviceTabletSlots> {
}
export {};
