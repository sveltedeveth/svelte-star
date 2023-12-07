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
export type GiPositionMarkerProps = typeof __propDef.props;
export type GiPositionMarkerEvents = typeof __propDef.events;
export type GiPositionMarkerSlots = typeof __propDef.slots;
export default class GiPositionMarker extends SvelteComponentTyped<GiPositionMarkerProps, GiPositionMarkerEvents, GiPositionMarkerSlots> {
}
export {};
