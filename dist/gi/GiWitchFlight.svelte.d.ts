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
export type GiWitchFlightProps = typeof __propDef.props;
export type GiWitchFlightEvents = typeof __propDef.events;
export type GiWitchFlightSlots = typeof __propDef.slots;
export default class GiWitchFlight extends SvelteComponentTyped<GiWitchFlightProps, GiWitchFlightEvents, GiWitchFlightSlots> {
}
export {};
