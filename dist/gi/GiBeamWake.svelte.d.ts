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
export type GiBeamWakeProps = typeof __propDef.props;
export type GiBeamWakeEvents = typeof __propDef.events;
export type GiBeamWakeSlots = typeof __propDef.slots;
export default class GiBeamWake extends SvelteComponentTyped<GiBeamWakeProps, GiBeamWakeEvents, GiBeamWakeSlots> {
}
export {};
