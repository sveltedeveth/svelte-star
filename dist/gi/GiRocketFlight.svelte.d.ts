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
export type GiRocketFlightProps = typeof __propDef.props;
export type GiRocketFlightEvents = typeof __propDef.events;
export type GiRocketFlightSlots = typeof __propDef.slots;
export default class GiRocketFlight extends SvelteComponentTyped<GiRocketFlightProps, GiRocketFlightEvents, GiRocketFlightSlots> {
}
export {};
