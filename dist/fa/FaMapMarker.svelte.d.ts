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
export type FaMapMarkerProps = typeof __propDef.props;
export type FaMapMarkerEvents = typeof __propDef.events;
export type FaMapMarkerSlots = typeof __propDef.slots;
export default class FaMapMarker extends SvelteComponentTyped<FaMapMarkerProps, FaMapMarkerEvents, FaMapMarkerSlots> {
}
export {};
