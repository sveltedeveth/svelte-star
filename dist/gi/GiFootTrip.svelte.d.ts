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
export type GiFootTripProps = typeof __propDef.props;
export type GiFootTripEvents = typeof __propDef.events;
export type GiFootTripSlots = typeof __propDef.slots;
export default class GiFootTrip extends SvelteComponentTyped<GiFootTripProps, GiFootTripEvents, GiFootTripSlots> {
}
export {};
