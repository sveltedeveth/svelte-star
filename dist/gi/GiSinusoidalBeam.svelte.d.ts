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
export type GiSinusoidalBeamProps = typeof __propDef.props;
export type GiSinusoidalBeamEvents = typeof __propDef.events;
export type GiSinusoidalBeamSlots = typeof __propDef.slots;
export default class GiSinusoidalBeam extends SvelteComponentTyped<GiSinusoidalBeamProps, GiSinusoidalBeamEvents, GiSinusoidalBeamSlots> {
}
export {};
