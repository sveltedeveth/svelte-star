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
export type GiSpikesProps = typeof __propDef.props;
export type GiSpikesEvents = typeof __propDef.events;
export type GiSpikesSlots = typeof __propDef.slots;
export default class GiSpikes extends SvelteComponentTyped<GiSpikesProps, GiSpikesEvents, GiSpikesSlots> {
}
export {};
