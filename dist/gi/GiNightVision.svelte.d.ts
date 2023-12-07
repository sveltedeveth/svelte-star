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
export type GiNightVisionProps = typeof __propDef.props;
export type GiNightVisionEvents = typeof __propDef.events;
export type GiNightVisionSlots = typeof __propDef.slots;
export default class GiNightVision extends SvelteComponentTyped<GiNightVisionProps, GiNightVisionEvents, GiNightVisionSlots> {
}
export {};
