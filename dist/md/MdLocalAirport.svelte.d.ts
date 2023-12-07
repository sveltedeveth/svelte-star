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
export type MdLocalAirportProps = typeof __propDef.props;
export type MdLocalAirportEvents = typeof __propDef.events;
export type MdLocalAirportSlots = typeof __propDef.slots;
export default class MdLocalAirport extends SvelteComponentTyped<MdLocalAirportProps, MdLocalAirportEvents, MdLocalAirportSlots> {
}
export {};
