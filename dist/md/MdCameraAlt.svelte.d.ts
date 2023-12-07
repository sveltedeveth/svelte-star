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
export type MdCameraAltProps = typeof __propDef.props;
export type MdCameraAltEvents = typeof __propDef.events;
export type MdCameraAltSlots = typeof __propDef.slots;
export default class MdCameraAlt extends SvelteComponentTyped<MdCameraAltProps, MdCameraAltEvents, MdCameraAltSlots> {
}
export {};
