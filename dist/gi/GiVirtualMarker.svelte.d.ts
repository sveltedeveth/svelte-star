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
export type GiVirtualMarkerProps = typeof __propDef.props;
export type GiVirtualMarkerEvents = typeof __propDef.events;
export type GiVirtualMarkerSlots = typeof __propDef.slots;
export default class GiVirtualMarker extends SvelteComponentTyped<GiVirtualMarkerProps, GiVirtualMarkerEvents, GiVirtualMarkerSlots> {
}
export {};
