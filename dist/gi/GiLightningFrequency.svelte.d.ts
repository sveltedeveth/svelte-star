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
export type GiLightningFrequencyProps = typeof __propDef.props;
export type GiLightningFrequencyEvents = typeof __propDef.events;
export type GiLightningFrequencySlots = typeof __propDef.slots;
export default class GiLightningFrequency extends SvelteComponentTyped<GiLightningFrequencyProps, GiLightningFrequencyEvents, GiLightningFrequencySlots> {
}
export {};
