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
export type GiGlobeRingProps = typeof __propDef.props;
export type GiGlobeRingEvents = typeof __propDef.events;
export type GiGlobeRingSlots = typeof __propDef.slots;
export default class GiGlobeRing extends SvelteComponentTyped<GiGlobeRingProps, GiGlobeRingEvents, GiGlobeRingSlots> {
}
export {};
