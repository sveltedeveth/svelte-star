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
export type GoDeviceCameraProps = typeof __propDef.props;
export type GoDeviceCameraEvents = typeof __propDef.events;
export type GoDeviceCameraSlots = typeof __propDef.slots;
export default class GoDeviceCamera extends SvelteComponentTyped<GoDeviceCameraProps, GoDeviceCameraEvents, GoDeviceCameraSlots> {
}
export {};
