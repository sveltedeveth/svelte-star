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
export type MdZoomOutMapProps = typeof __propDef.props;
export type MdZoomOutMapEvents = typeof __propDef.events;
export type MdZoomOutMapSlots = typeof __propDef.slots;
export default class MdZoomOutMap extends SvelteComponentTyped<MdZoomOutMapProps, MdZoomOutMapEvents, MdZoomOutMapSlots> {
}
export {};
