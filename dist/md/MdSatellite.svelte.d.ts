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
export type MdSatelliteProps = typeof __propDef.props;
export type MdSatelliteEvents = typeof __propDef.events;
export type MdSatelliteSlots = typeof __propDef.slots;
export default class MdSatellite extends SvelteComponentTyped<MdSatelliteProps, MdSatelliteEvents, MdSatelliteSlots> {
}
export {};
