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
export type GiHandheldFanProps = typeof __propDef.props;
export type GiHandheldFanEvents = typeof __propDef.events;
export type GiHandheldFanSlots = typeof __propDef.slots;
export default class GiHandheldFan extends SvelteComponentTyped<GiHandheldFanProps, GiHandheldFanEvents, GiHandheldFanSlots> {
}
export {};
