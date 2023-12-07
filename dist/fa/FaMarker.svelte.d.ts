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
export type FaMarkerProps = typeof __propDef.props;
export type FaMarkerEvents = typeof __propDef.events;
export type FaMarkerSlots = typeof __propDef.slots;
export default class FaMarker extends SvelteComponentTyped<FaMarkerProps, FaMarkerEvents, FaMarkerSlots> {
}
export {};
