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
export type GiSatelliteCommunicationProps = typeof __propDef.props;
export type GiSatelliteCommunicationEvents = typeof __propDef.events;
export type GiSatelliteCommunicationSlots = typeof __propDef.slots;
export default class GiSatelliteCommunication extends SvelteComponentTyped<GiSatelliteCommunicationProps, GiSatelliteCommunicationEvents, GiSatelliteCommunicationSlots> {
}
export {};
