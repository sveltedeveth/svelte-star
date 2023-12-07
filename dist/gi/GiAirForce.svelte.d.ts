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
export type GiAirForceProps = typeof __propDef.props;
export type GiAirForceEvents = typeof __propDef.events;
export type GiAirForceSlots = typeof __propDef.slots;
export default class GiAirForce extends SvelteComponentTyped<GiAirForceProps, GiAirForceEvents, GiAirForceSlots> {
}
export {};
