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
export type GiRadarSweepProps = typeof __propDef.props;
export type GiRadarSweepEvents = typeof __propDef.events;
export type GiRadarSweepSlots = typeof __propDef.slots;
export default class GiRadarSweep extends SvelteComponentTyped<GiRadarSweepProps, GiRadarSweepEvents, GiRadarSweepSlots> {
}
export {};
