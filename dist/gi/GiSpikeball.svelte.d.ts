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
export type GiSpikeballProps = typeof __propDef.props;
export type GiSpikeballEvents = typeof __propDef.events;
export type GiSpikeballSlots = typeof __propDef.slots;
export default class GiSpikeball extends SvelteComponentTyped<GiSpikeballProps, GiSpikeballEvents, GiSpikeballSlots> {
}
export {};
