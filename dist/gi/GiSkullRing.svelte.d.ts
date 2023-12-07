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
export type GiSkullRingProps = typeof __propDef.props;
export type GiSkullRingEvents = typeof __propDef.events;
export type GiSkullRingSlots = typeof __propDef.slots;
export default class GiSkullRing extends SvelteComponentTyped<GiSkullRingProps, GiSkullRingEvents, GiSkullRingSlots> {
}
export {};
