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
export type GoDeviceCameraVideoProps = typeof __propDef.props;
export type GoDeviceCameraVideoEvents = typeof __propDef.events;
export type GoDeviceCameraVideoSlots = typeof __propDef.slots;
export default class GoDeviceCameraVideo extends SvelteComponentTyped<GoDeviceCameraVideoProps, GoDeviceCameraVideoEvents, GoDeviceCameraVideoSlots> {
}
export {};
