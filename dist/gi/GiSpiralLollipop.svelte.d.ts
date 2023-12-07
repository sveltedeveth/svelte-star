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
export type GiSpiralLollipopProps = typeof __propDef.props;
export type GiSpiralLollipopEvents = typeof __propDef.events;
export type GiSpiralLollipopSlots = typeof __propDef.slots;
export default class GiSpiralLollipop extends SvelteComponentTyped<GiSpiralLollipopProps, GiSpiralLollipopEvents, GiSpiralLollipopSlots> {
}
export {};
