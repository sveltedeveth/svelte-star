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
export type MdCameraProps = typeof __propDef.props;
export type MdCameraEvents = typeof __propDef.events;
export type MdCameraSlots = typeof __propDef.slots;
export default class MdCamera extends SvelteComponentTyped<MdCameraProps, MdCameraEvents, MdCameraSlots> {
}
export {};
