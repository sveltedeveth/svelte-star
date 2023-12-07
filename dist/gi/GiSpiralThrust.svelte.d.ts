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
export type GiSpiralThrustProps = typeof __propDef.props;
export type GiSpiralThrustEvents = typeof __propDef.events;
export type GiSpiralThrustSlots = typeof __propDef.slots;
export default class GiSpiralThrust extends SvelteComponentTyped<GiSpiralThrustProps, GiSpiralThrustEvents, GiSpiralThrustSlots> {
}
export {};
