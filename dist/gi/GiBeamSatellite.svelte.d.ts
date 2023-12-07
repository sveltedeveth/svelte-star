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
export type GiBeamSatelliteProps = typeof __propDef.props;
export type GiBeamSatelliteEvents = typeof __propDef.events;
export type GiBeamSatelliteSlots = typeof __propDef.slots;
export default class GiBeamSatellite extends SvelteComponentTyped<GiBeamSatelliteProps, GiBeamSatelliteEvents, GiBeamSatelliteSlots> {
}
export {};
