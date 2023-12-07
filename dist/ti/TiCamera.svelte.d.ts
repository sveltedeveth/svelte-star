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
export type TiCameraProps = typeof __propDef.props;
export type TiCameraEvents = typeof __propDef.events;
export type TiCameraSlots = typeof __propDef.slots;
export default class TiCamera extends SvelteComponentTyped<TiCameraProps, TiCameraEvents, TiCameraSlots> {
}
export {};
