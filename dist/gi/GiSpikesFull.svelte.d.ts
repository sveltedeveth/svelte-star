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
export type GiSpikesFullProps = typeof __propDef.props;
export type GiSpikesFullEvents = typeof __propDef.events;
export type GiSpikesFullSlots = typeof __propDef.slots;
export default class GiSpikesFull extends SvelteComponentTyped<GiSpikesFullProps, GiSpikesFullEvents, GiSpikesFullSlots> {
}
export {};
