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
export type FaSatelliteProps = typeof __propDef.props;
export type FaSatelliteEvents = typeof __propDef.events;
export type FaSatelliteSlots = typeof __propDef.slots;
export default class FaSatellite extends SvelteComponentTyped<FaSatelliteProps, FaSatelliteEvents, FaSatelliteSlots> {
}
export {};
