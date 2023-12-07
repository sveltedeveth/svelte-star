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
export type GiJourneyProps = typeof __propDef.props;
export type GiJourneyEvents = typeof __propDef.events;
export type GiJourneySlots = typeof __propDef.slots;
export default class GiJourney extends SvelteComponentTyped<GiJourneyProps, GiJourneyEvents, GiJourneySlots> {
}
export {};
