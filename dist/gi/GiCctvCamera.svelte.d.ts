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
export type GiCctvCameraProps = typeof __propDef.props;
export type GiCctvCameraEvents = typeof __propDef.events;
export type GiCctvCameraSlots = typeof __propDef.slots;
export default class GiCctvCamera extends SvelteComponentTyped<GiCctvCameraProps, GiCctvCameraEvents, GiCctvCameraSlots> {
}
export {};
