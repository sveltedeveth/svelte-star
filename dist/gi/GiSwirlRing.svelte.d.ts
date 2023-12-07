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
export type GiSwirlRingProps = typeof __propDef.props;
export type GiSwirlRingEvents = typeof __propDef.events;
export type GiSwirlRingSlots = typeof __propDef.slots;
export default class GiSwirlRing extends SvelteComponentTyped<GiSwirlRingProps, GiSwirlRingEvents, GiSwirlRingSlots> {
}
export {};
