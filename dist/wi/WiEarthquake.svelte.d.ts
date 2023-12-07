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
export type WiEarthquakeProps = typeof __propDef.props;
export type WiEarthquakeEvents = typeof __propDef.events;
export type WiEarthquakeSlots = typeof __propDef.slots;
export default class WiEarthquake extends SvelteComponentTyped<WiEarthquakeProps, WiEarthquakeEvents, WiEarthquakeSlots> {
}
export {};
