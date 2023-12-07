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
export type TiCameraOutlineProps = typeof __propDef.props;
export type TiCameraOutlineEvents = typeof __propDef.events;
export type TiCameraOutlineSlots = typeof __propDef.slots;
export default class TiCameraOutline extends SvelteComponentTyped<TiCameraOutlineProps, TiCameraOutlineEvents, TiCameraOutlineSlots> {
}
export {};
