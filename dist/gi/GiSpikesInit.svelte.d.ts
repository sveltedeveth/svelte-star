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
export type GiSpikesInitProps = typeof __propDef.props;
export type GiSpikesInitEvents = typeof __propDef.events;
export type GiSpikesInitSlots = typeof __propDef.slots;
export default class GiSpikesInit extends SvelteComponentTyped<GiSpikesInitProps, GiSpikesInitEvents, GiSpikesInitSlots> {
}
export {};
