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
export type GiRingedBeamProps = typeof __propDef.props;
export type GiRingedBeamEvents = typeof __propDef.events;
export type GiRingedBeamSlots = typeof __propDef.slots;
export default class GiRingedBeam extends SvelteComponentTyped<GiRingedBeamProps, GiRingedBeamEvents, GiRingedBeamSlots> {
}
export {};
