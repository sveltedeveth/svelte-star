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
export type GiSpiralBloomProps = typeof __propDef.props;
export type GiSpiralBloomEvents = typeof __propDef.events;
export type GiSpiralBloomSlots = typeof __propDef.slots;
export default class GiSpiralBloom extends SvelteComponentTyped<GiSpiralBloomProps, GiSpiralBloomEvents, GiSpiralBloomSlots> {
}
export {};
