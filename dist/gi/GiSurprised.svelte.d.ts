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
export type GiSurprisedProps = typeof __propDef.props;
export type GiSurprisedEvents = typeof __propDef.events;
export type GiSurprisedSlots = typeof __propDef.slots;
export default class GiSurprised extends SvelteComponentTyped<GiSurprisedProps, GiSurprisedEvents, GiSurprisedSlots> {
}
export {};
