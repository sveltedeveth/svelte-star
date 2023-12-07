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
export type MdAirportShuttleProps = typeof __propDef.props;
export type MdAirportShuttleEvents = typeof __propDef.events;
export type MdAirportShuttleSlots = typeof __propDef.slots;
export default class MdAirportShuttle extends SvelteComponentTyped<MdAirportShuttleProps, MdAirportShuttleEvents, MdAirportShuttleSlots> {
}
export {};
