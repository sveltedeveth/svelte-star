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
export type GiDefenseSatelliteProps = typeof __propDef.props;
export type GiDefenseSatelliteEvents = typeof __propDef.events;
export type GiDefenseSatelliteSlots = typeof __propDef.slots;
export default class GiDefenseSatellite extends SvelteComponentTyped<GiDefenseSatelliteProps, GiDefenseSatelliteEvents, GiDefenseSatelliteSlots> {
}
export {};
