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
export type IoMdCameraProps = typeof __propDef.props;
export type IoMdCameraEvents = typeof __propDef.events;
export type IoMdCameraSlots = typeof __propDef.slots;
export default class IoMdCamera extends SvelteComponentTyped<IoMdCameraProps, IoMdCameraEvents, IoMdCameraSlots> {
}
export {};
