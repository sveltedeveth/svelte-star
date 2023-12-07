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
export type GiWavyItineraryProps = typeof __propDef.props;
export type GiWavyItineraryEvents = typeof __propDef.events;
export type GiWavyItinerarySlots = typeof __propDef.slots;
export default class GiWavyItinerary extends SvelteComponentTyped<GiWavyItineraryProps, GiWavyItineraryEvents, GiWavyItinerarySlots> {
}
export {};
