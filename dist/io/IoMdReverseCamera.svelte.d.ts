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
export type IoMdReverseCameraProps = typeof __propDef.props;
export type IoMdReverseCameraEvents = typeof __propDef.events;
export type IoMdReverseCameraSlots = typeof __propDef.slots;
export default class IoMdReverseCamera extends SvelteComponentTyped<IoMdReverseCameraProps, IoMdReverseCameraEvents, IoMdReverseCameraSlots> {
}
export {};
