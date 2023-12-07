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
export type GiPowerRingProps = typeof __propDef.props;
export type GiPowerRingEvents = typeof __propDef.events;
export type GiPowerRingSlots = typeof __propDef.slots;
export default class GiPowerRing extends SvelteComponentTyped<GiPowerRingProps, GiPowerRingEvents, GiPowerRingSlots> {
}
export {};
